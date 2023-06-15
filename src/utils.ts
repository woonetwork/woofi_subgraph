import { BigDecimal, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
    BI_0,
    BI_1,
    WOOFI_SOURCES,
    REBATE_ADDRESSES,
    WOOFI_ORDER_SOURCE_ID,
    OTHER_ORDER_SOURCE_ID,
} from "./constants";

export function exponentToBigInt(decimals: BigInt): BigInt {
    let bi = BigInt.fromString("1");
    for (let i = BI_0; i.lt(decimals as BigInt); i = i.plus(BI_1)) {
        bi = bi.times(BigInt.fromString("10"));
    }
    return bi;
}

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
    let bi = exponentToBigInt(decimals);

    return bi.toBigDecimal();
}

export function getOrderSourceIDForWooPP(transactionTo: string, wooSwapFrom: Bytes, rebateTo: Bytes | null): string {
    if (WOOFI_SOURCES.indexOf(transactionTo) !== -1 || rebateTo === null) {
        return WOOFI_ORDER_SOURCE_ID;
    }

    for (let i = 0; i < REBATE_ADDRESSES.length; i++) {
        if (REBATE_ADDRESSES[i].indexOf(rebateTo.toHexString()) !== -1) {
            return i.toString();
        }
    }

    return OTHER_ORDER_SOURCE_ID;
}
