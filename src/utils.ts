import {BigDecimal, BigInt} from "@graphprotocol/graph-ts/index";
import {
    ONE_BI,
    ZERO_BI,
    WOO_ROUTER,
    WOO_ROUTER_ORDER_SOURCE_ID,
    ONE_INCH_ORDER_SOURCES,
    ONE_INCH_ORDER_SOURCE_ID,
    DODO_ORDER_SOURCES,
    DODO_ORDER_SOURCE_ID,
    OPEN_OCEAN_SOURCES,
    OPEN_OCEAN_ORDER_SOURCE_ID,
    METAMASK_SOURCES,
    METAMASK_ORDER_SOURCE_ID,
    OTHER_ORDER_SOURCE_ID,
} from "./constants";

export function exponentToBigInt(decimals: BigInt): BigInt {
    let bi = BigInt.fromString('1');
    for (let i = ZERO_BI; i.lt(decimals as BigInt); i = i.plus(ONE_BI)) {
        bi = bi.times(BigInt.fromString('10'));
    }
    return bi;
}

export function exponentToBigDecimal(decimals: BigInt): BigDecimal {
    let bi = exponentToBigInt(decimals);

    return bi.toBigDecimal();
}

export function getOrderSourceIDForWooPP(transactionTo: string): string {
    let orderSourceID: string;

    if (transactionTo == WOO_ROUTER) {
        orderSourceID = WOO_ROUTER_ORDER_SOURCE_ID;
    } else if (ONE_INCH_ORDER_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = ONE_INCH_ORDER_SOURCE_ID;
    } else if (DODO_ORDER_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = DODO_ORDER_SOURCE_ID;
    } else if (OPEN_OCEAN_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = OPEN_OCEAN_ORDER_SOURCE_ID;
    } else if (METAMASK_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = METAMASK_ORDER_SOURCE_ID;
    } else {
        orderSourceID = OTHER_ORDER_SOURCE_ID;
    }

    return orderSourceID;
}

export function getOrderSourceIDForWooRouter(msgSender: string): string {
    let orderSourceID: string;

    if (ONE_INCH_ORDER_SOURCES.indexOf(msgSender) != -1) {
        orderSourceID = ONE_INCH_ORDER_SOURCE_ID;
    } else if (DODO_ORDER_SOURCES.indexOf(msgSender) != -1) {
        orderSourceID = DODO_ORDER_SOURCE_ID;
    } else if (OPEN_OCEAN_SOURCES.indexOf(msgSender) != -1) {
        orderSourceID = OPEN_OCEAN_ORDER_SOURCE_ID;
    } else if (METAMASK_SOURCES.indexOf(msgSender) != -1) {
        orderSourceID = METAMASK_ORDER_SOURCE_ID;
    } else {
        orderSourceID = WOO_ROUTER_ORDER_SOURCE_ID;
    }

    return orderSourceID;
}
