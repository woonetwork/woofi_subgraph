import {BigDecimal, BigInt} from "@graphprotocol/graph-ts/index";
import {
    BI_1,
    BI_0,
    WOO_ROUTER_SOURCES,
    WOO_PP_SOURCES,
    WOO_VAULT_MANAGER_SOURCES,
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
    PARA_SWAP_SOURCES,
    PARA_SWAP_ORDER_SOURCE_ID,
    BEETHOVEN_X_SOURCES,
    BEETHOVEN_X_ORDER_SOURCE_ID,
    OTHER_ORDER_SOURCE_ID,
    GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID,
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

export function getOrderSourceIDForMetaMaskAsTransactionTo(wooSwapFrom: string): string {
    let orderSourceID: string;

    if (WOO_ROUTER_SOURCES.indexOf(wooSwapFrom) != -1) {
        // Avalanche: 1inch -> WooRouter -> WooPP
        orderSourceID = ONE_INCH_ORDER_SOURCE_ID;
    } else if (PARA_SWAP_SOURCES.indexOf(wooSwapFrom) != -1) {
        // BNB Chain / Polygon: ParaSwap -> WooPP
        orderSourceID = PARA_SWAP_ORDER_SOURCE_ID;
    } else {
        orderSourceID = METAMASK_ORDER_SOURCE_ID;
    }

    return orderSourceID;
}

export function getOrderSourceIDForWooPP(transactionTo: string, wooSwapFrom: string): string {
    // If Arbitrage Contract(transactionTo) -> 1inch / BitKeep / BeethovenX -> WooRouter(wooSwapFrom) -> WooPP,
    // then the next step is to check wooRouterSwapFrom to see if it's 1inch / BitKeep / BeethovenX / ... else Others

    // If Arbitrage Contract(transactionTo/wooSwapFrom) -> WooPP,
    // then regard as Others
    let orderSourceID: string;

    if (
        WOO_ROUTER_SOURCES.indexOf(transactionTo) != -1 ||
        WOO_PP_SOURCES.indexOf(transactionTo) != -1 ||
        WOO_VAULT_MANAGER_SOURCES.indexOf(transactionTo) != -1
    ) {
        // 1.WooRouter(transactionTo) NOTE: don't use wooSwapFrom because like 1inch will call WooRouter as integration
        // 2.WooPP(transactionTo)
        // 3.WooVaultManager(transactionTo)
        orderSourceID = WOO_ROUTER_ORDER_SOURCE_ID;
    } else if (
        ONE_INCH_ORDER_SOURCES.indexOf(transactionTo) != -1 ||
        ONE_INCH_ORDER_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        orderSourceID = ONE_INCH_ORDER_SOURCE_ID;
    } else if (
        DODO_ORDER_SOURCES.indexOf(transactionTo) != -1 ||
        DODO_ORDER_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        orderSourceID = DODO_ORDER_SOURCE_ID;
    } else if (
        OPEN_OCEAN_SOURCES.indexOf(transactionTo) != -1 ||
        OPEN_OCEAN_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        orderSourceID = OPEN_OCEAN_ORDER_SOURCE_ID;
    } else if (METAMASK_SOURCES.indexOf(transactionTo) != -1) {
        orderSourceID = getOrderSourceIDForMetaMaskAsTransactionTo(wooSwapFrom);
    } else if (METAMASK_SOURCES.indexOf(wooSwapFrom) != -1) {
        orderSourceID = METAMASK_ORDER_SOURCE_ID;
    } else if (
        YIELD_YAK_SOURCES.indexOf(transactionTo) != -1 ||
        YIELD_YAK_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        orderSourceID = YIELD_YAK_ORDER_SOURCE_ID;
    } else if (
        FIRE_BIRD_SOURCES.indexOf(transactionTo) != -1 ||
        FIRE_BIRD_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        orderSourceID = FIRE_BIRD_ORDER_SOURCE_ID;
    } else if (
        BIT_KEEP_SOURCES.indexOf(transactionTo) != -1 ||
        BIT_KEEP_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        orderSourceID = BIT_KEEP_ORDER_SOURCE_ID;
    } else if (
        PARA_SWAP_SOURCES.indexOf(transactionTo) != -1 ||
        PARA_SWAP_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        orderSourceID = PARA_SWAP_ORDER_SOURCE_ID;
    } else if (
        // BEETHOVEN_X_SOURCES.indexOf(transactionTo) != -1 ||
        BEETHOVEN_X_SOURCES.indexOf(wooSwapFrom) != -1
    ) {
        // BeethovenX integrate 1inch on Fantom
        orderSourceID = BEETHOVEN_X_ORDER_SOURCE_ID;
    } else {
        if (WOO_ROUTER_SOURCES.indexOf(wooSwapFrom) != -1) {
            orderSourceID = GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID;
        } else {
            orderSourceID = OTHER_ORDER_SOURCE_ID;
        }
    }

    return orderSourceID;
}

export function getOrderSourceIDForWooRouter(transactionFrom: string, wooRouterSwapFrom: string): string {
    let orderSourceID: string;

    if (transactionFrom == wooRouterSwapFrom) {
        // If transactionFrom equal to wooRouterSwapFrom, regard as normal user.
        orderSourceID = WOO_ROUTER_ORDER_SOURCE_ID;
    } else if (ONE_INCH_ORDER_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = ONE_INCH_ORDER_SOURCE_ID;
    } else if (DODO_ORDER_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = DODO_ORDER_SOURCE_ID;
    } else if (OPEN_OCEAN_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = OPEN_OCEAN_ORDER_SOURCE_ID;
    } else if (METAMASK_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = METAMASK_ORDER_SOURCE_ID;
    } else if (YIELD_YAK_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = YIELD_YAK_ORDER_SOURCE_ID;
    } else if (FIRE_BIRD_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = FIRE_BIRD_ORDER_SOURCE_ID;
    } else if (BIT_KEEP_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = BIT_KEEP_ORDER_SOURCE_ID;
    } else if (PARA_SWAP_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = PARA_SWAP_ORDER_SOURCE_ID;
    } else if (BEETHOVEN_X_SOURCES.indexOf(wooRouterSwapFrom) != -1) {
        orderSourceID = BEETHOVEN_X_ORDER_SOURCE_ID;
    } else {
        orderSourceID = OTHER_ORDER_SOURCE_ID;
    }

    return orderSourceID;
}
