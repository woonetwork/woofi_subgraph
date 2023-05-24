import { BigDecimal, BigInt, TypedMap } from "@graphprotocol/graph-ts";

export let BI_0 = BigInt.fromI32(0);
export let BI_1 = BigInt.fromI32(1);
export let BI_2 = BigInt.fromI32(2);
export let BI_6 = BigInt.fromI32(6);
export let BI_8 = BigInt.fromI32(8);
export let BI_18 = BigInt.fromI32(18);

export let BD_0 = BigDecimal.fromString("0");
export let BD_1 = BigDecimal.fromString("1");

// Address Must Be Lower Case!!!
export const ETHER = "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee";
export const ETHER_SYMBOL = "ETH";
export const ETHER_NAME = "eth";

export const WRAPPED = "0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2";

export const STABLE_TOKENS: string[] = [
    "0xdac17f958d2ee523a2206206994597c13d831ec7",  // USDT
    "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48",  // USDC
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x9d1a92e601db0901e69bd810029f2c14bcca3128",  // WooCrossChainRouterV2
];

export const WOO_PP_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254eeb25477b68fb85ed929f73a960582",  // Aggregation Router V5
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x11111112542d85b3ef69ae05771c2dccff4faa26",  // Aggregation Router V3
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",  // OpenOcean Exchange V2
];

export const METAMASK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const YIELD_YAK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const FIRE_BIRD_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const BIT_KEEP_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const PARA_SWAP_SOURCES: string[] = [
    "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",  // AugustusSwapper
];

export const BEETHOVEN_X_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const TRANSIT_SWAP_SOURCES: string[] = [
    "0xb45a2dda996c32e93b8c47098e90ed0e7ab18e39",  // Router
];

export const ZERO_X_SOURCES: string[] = [
    "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
];

export const ODOS_SOURCES: string[] = [
    "0xdd94018f54e565dbfc939f7c44a16e163faab331",  // OdosRouter
];

export const HERA_FINANCE_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const THOR_SWAP_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export let ADDRESS_SOURCES: string[][] = [
    WOO_ROUTER_SOURCES.concat(WOO_PP_SOURCES).concat(WOO_VAULT_MANAGER_SOURCES),  // 0: WOOFi
    ONE_INCH_ORDER_SOURCES,  // 1: 1inch
    DODO_ORDER_SOURCES,  // 2: DODO
    OPEN_OCEAN_SOURCES,  // 3: OpenOcean
    METAMASK_SOURCES,  // 4: MetaMask
    YIELD_YAK_SOURCES,  // 5: YieldYak
    FIRE_BIRD_SOURCES,  // 6: FireBird
    BIT_KEEP_SOURCES,  // 7: BitKeep
    PARA_SWAP_SOURCES,  // 8: ParaSwap
    BEETHOVEN_X_SOURCES,  // 9: BeethovenX
    TRANSIT_SWAP_SOURCES,  // 10: TransitSwap
    ZERO_X_SOURCES,  // 11: 0x
    ODOS_SOURCES,  // 12: ODOS
    HERA_FINANCE_SOURCES,  // 13: HeraFinance
    THOR_SWAP_SOURCES,  // 14: ThorSwap
];

export const GLOBAL_VARIABLE_ID = "0";
export const ORDER_HISTORY_VARIABLE_ID = "0";
export const CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID = "1";
export const CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID = "2";

export const WOO_ROUTER_ORDER_SOURCE_ID = "0";
export const ONE_INCH_ORDER_SOURCE_ID = "1";
export const DODO_ORDER_SOURCE_ID = "2";
export const OPEN_OCEAN_ORDER_SOURCE_ID = "3";
export const METAMASK_ORDER_SOURCE_ID = "4";
export const YIELD_YAK_ORDER_SOURCE_ID = "5";
export const FIRE_BIRD_ORDER_SOURCE_ID = "6";
export const BIT_KEEP_ORDER_SOURCE_ID = "7";
export const PARA_SWAP_ORDER_SOURCE_ID = "8";
export const BEETHOVEN_X_ORDER_SOURCE_ID = "9";
export const TRANSIT_SWAP_ORDER_SOURCE_ID = "10";
export const ZERO_X_ORDER_SOURCE_ID = "11";
export const ODOS_ORDER_SOURCE_ID = "12";
export const HERA_FINANCE_ORDER_SOURCE_ID = "13";
export const THOR_SWAP_ORDER_SOURCE_ID = "14";
export const OTHER_ORDER_SOURCE_ID = "99";

export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = "-99";
