import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { ERC20 } from "../generated/WooRouterV1_1/ERC20";
import { BI_0, BI_2, BI_18, ETHER, ETHER_SYMBOL, ETHER_NAME, STABLE_TOKENS, WOOFI_SWAP_TYPE } from "./constants";
import { exponentToBigInt } from "./utils";
import { createToken } from "./create";

export function fetchTokenSymbol(tokenAddress: Bytes): string {
    if (tokenAddress.toHexString() === ETHER) {
        return ETHER_SYMBOL;
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let symbolResult = contract.try_symbol();
    if (symbolResult.reverted) {
        return "UNKNOWN";
    }

    return symbolResult.value;
}

export function fetchTokenName(tokenAddress: Bytes): string {
    if (tokenAddress.toHexString() === ETHER) {
        return ETHER_NAME;
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let nameResult = contract.try_name();
    if (nameResult.reverted) {
        return "Unknown";
    }

    return nameResult.value;
}

export function fetchTokenTotalSupply(tokenAddress: Bytes): BigInt {
    if (tokenAddress.toHexString() === ETHER) {
        return BigInt.fromI32(0);
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let totalSupplyResult = contract.try_totalSupply();
    if (totalSupplyResult.reverted) {
        return BigInt.fromI32(0);
    }

    return totalSupplyResult.value;
}

export function fetchTokenDecimals(tokenAddress: Bytes): BigInt {
    if (tokenAddress.toHexString() === ETHER) {
        return BigInt.fromI32(18);
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let decimalResult = contract.try_decimals();
    if (decimalResult.reverted) {
        return BigInt.fromI32(18);
    }

    return BigInt.fromI32(decimalResult.value);
}

export function fetchTokenBalance(tokenAddress: Bytes, user: Bytes): BigInt {
    if (tokenAddress.toHexString() === ETHER) {
        return BigInt.fromI32(0);
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let balanceResult = contract.try_balanceOf(user as Address);
    if (balanceResult.reverted) {
        return BigInt.fromI32(0);
    }

    return balanceResult.value;
}

export function calVolumeUSDForWooPP(event: ethereum.Event, fromTokenAddress: Bytes, fromAmount: BigInt, toTokenAddress: Bytes, toAmount: BigInt): BigInt {
    if (STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) != -1) {  // fromToken is Stable Coin
        let fromToken = createToken(event, fromTokenAddress);
        if (fromToken.decimals != BI_18) {
            return fromAmount.times(exponentToBigInt(BI_18)).div(exponentToBigInt(fromToken.decimals));
        }
        return fromAmount;
    } else {  // toToken is Stable Coin
        let toToken = createToken(event, toTokenAddress);
        if (toToken.decimals != BI_18) {
            return toAmount.times(exponentToBigInt(BI_18)).div(exponentToBigInt(toToken.decimals));
        }
        return toAmount;
    }
}

export function calVolumeUSDForWooRouter(
    event: ethereum.Event,
    swapType: i32,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt,
    isV1: boolean
): BigInt {
    let BI_1e18 = exponentToBigInt(BI_18);
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    let volumeUSD: BigInt;
    if (fromToken.lastTradePrice != BI_0) {
        if (fromToken.decimals != BI_18) {
            let BI_1eDoubleDecimals = exponentToBigInt(fromToken.decimals.times(BI_2));
            volumeUSD = fromAmount.times(BI_1e18).div(BI_1eDoubleDecimals).times(fromToken.lastTradePrice);
        } else {
            volumeUSD = fromAmount.times(fromToken.lastTradePrice).div(BI_1e18);
        }
    } else {
        if (toToken.decimals != BI_18) {
            let BI_1eDoubleDecimals = exponentToBigInt(toToken.decimals.times(BI_2));
            volumeUSD = toAmount.times(BI_1e18).div(BI_1eDoubleDecimals).times(toToken.lastTradePrice);
        } else {
            volumeUSD = toAmount.times(toToken.lastTradePrice).div(BI_1e18);
        }
    }

    if (
        isV1 === true
        && STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) === -1
        && STABLE_TOKENS.indexOf(toTokenAddress.toHexString()) === -1
        && swapType === WOOFI_SWAP_TYPE
    ) {
        volumeUSD = volumeUSD.times(BI_2);
    }

    return volumeUSD;
}
