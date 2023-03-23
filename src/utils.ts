import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import {
    BI_1,
    BI_0,
    WOO_ROUTER_SOURCES,
    WOO_ROUTER_ORDER_SOURCE_ID,
    OTHER_ORDER_SOURCE_ID,
    GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID,
    ADDRESS_SOURCES,
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

export function getOrderSourceIDForWooPP(transactionTo: string, wooSwapFrom: string): string {
    if (ADDRESS_SOURCES[0].indexOf(transactionTo) != -1) {
        return WOO_ROUTER_ORDER_SOURCE_ID;
    }

    if (WOO_ROUTER_SOURCES.indexOf(wooSwapFrom) != -1) {
        return GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID;
    }

    for (let i = 1; i < ADDRESS_SOURCES.length; i++) {
        if (ADDRESS_SOURCES[i].indexOf(wooSwapFrom) != -1) {
            return i.toString();
        }
    }

    return OTHER_ORDER_SOURCE_ID;
}

export function getOrderSourceIDForWooRouter(transactionFrom: string, wooRouterSwapFrom: string): string {
    for (let i = 1; i < ADDRESS_SOURCES.length; i++) {
        if (ADDRESS_SOURCES[i].indexOf(wooRouterSwapFrom) != -1) {
            return i.toString();
        }
    }

    return OTHER_ORDER_SOURCE_ID;
}
