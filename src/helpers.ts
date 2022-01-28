import {ERC20} from "../generated/WooPP/ERC20";
import {Address, BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts";
import {BI_18, ETHER, ETHER_SYMBOL, ETHER_NAME, WRAPPED, STABLE_TOKENS} from "./constants";
import {createToken} from "./create";
import {exponentToBigInt} from "./utils";

export function fetchTokenSymbol(tokenAddress: Bytes): string {
    if (tokenAddress.toHexString() == ETHER) {
        return ETHER_SYMBOL;
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let symbolResult = contract.try_symbol();
    if (symbolResult.reverted) {
        return 'UNKNOWN';
    }

    return symbolResult.value;
}

export function fetchTokenName(tokenAddress: Bytes): string {
    if (tokenAddress.toHexString() == ETHER) {
        return ETHER_NAME;
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let nameResult = contract.try_name();
    if (nameResult.reverted) {
        return 'Unknown';
    }

    return nameResult.value;
}

export function fetchTokenTotalSupply(tokenAddress: Bytes): BigInt {
    if (tokenAddress.toHexString() == ETHER) {
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
    if (tokenAddress.toHexString() == ETHER) {
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
    if (tokenAddress.toHexString() == ETHER) {
        return BigInt.fromI32(0);
    }

    let contract = ERC20.bind(tokenAddress as Address);
    let balanceResult = contract.try_balanceOf(user as Address);
    if (balanceResult.reverted) {
        return BigInt.fromI32(0);
    }

    return balanceResult.value;
}

export function updateTokenPrice(event: ethereum.Event, fromTokenAddress: Bytes, fromAmount: BigInt, toTokenAddress: Bytes, toAmount: BigInt): void {
    if (fromTokenAddress.toHexString() == WRAPPED) {
        fromTokenAddress = Address.fromString(ETHER);
    }
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    let BI_1e18 = exponentToBigInt(BI_18);
    if (STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) != -1) {  // fromToken is Stable Coin
        toToken.lastTradePrice = fromAmount.times(BI_1e18).div(toAmount);
        toToken.save();
    } else if (STABLE_TOKENS.indexOf(toTokenAddress.toHexString()) != -1) {  // toToken is Stable Coin
        fromToken.lastTradePrice = toAmount.times(BI_1e18).div(fromAmount);
        fromToken.save();
    }
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
            return fromAmount.times(exponentToBigInt(BI_18)).div(exponentToBigInt(toToken.decimals));
        }
        return toAmount;
    }
}
