import {BigDecimal, BigInt} from "@graphprotocol/graph-ts/index";
import {
    BI_1,
    BI_0,
    WOO_ROUTER,
    WOO_PP,
    WOO_ROUTER_ORDER_SOURCE_ID,
    ONE_INCH_ORDER_SOURCES,
    ONE_INCH_ORDER_SOURCE_ID,
    DODO_ORDER_SOURCES,
    DODO_ORDER_SOURCE_ID,
    OPEN_OCEAN_SOURCES,
    OPEN_OCEAN_ORDER_SOURCE_ID,
    METAMASK_SOURCES,
    METAMASK_ORDER_SOURCE_ID,
    YIELD_YAK_SOURCES,
    YIELD_YAK_ORDER_SOURCE_ID,
    FIRE_BIRD_SOURCES,
    FIRE_BIRD_ORDER_SOURCE_ID,
    BIT_KEEP_SOURCES,
    BIT_KEEP_ORDER_SOURCE_ID,
    OTHER_ORDER_SOURCE_ID,
} from "./constants";

export function exponentToBigInt(decimals: BigInt): BigInt {
    let bi = BigInt.fromString('1');
    for (let i = BI_0; i.lt(decimals as BigInt); i = i.plus(BI_1)) {
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

    if (transactionTo == WOO_ROUTER || transactionTo == WOO_PP) {
        orderSourceID = WOO_ROUTER_ORDER_SOURCE_ID;
    } else if (ONE_INCH_ORDER_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = ONE_INCH_ORDER_SOURCE_ID;
    } else if (DODO_ORDER_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = DODO_ORDER_SOURCE_ID;
    } else if (OPEN_OCEAN_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = OPEN_OCEAN_ORDER_SOURCE_ID;
    } else if (METAMASK_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = METAMASK_ORDER_SOURCE_ID;
    } else if (YIELD_YAK_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = YIELD_YAK_ORDER_SOURCE_ID;
    } else if (FIRE_BIRD_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = FIRE_BIRD_ORDER_SOURCE_ID;
    } else if (BIT_KEEP_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = BIT_KEEP_ORDER_SOURCE_ID;
    } else {
        orderSourceID = OTHER_ORDER_SOURCE_ID;
    }

    return orderSourceID;
}
