import {ERC20} from "../generated/WooPP/ERC20";
import {Address, BigInt, Bytes} from "@graphprotocol/graph-ts";
import {ETHER, ETHER_NAME, ETHER_SYMBOL} from "./constants";

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
