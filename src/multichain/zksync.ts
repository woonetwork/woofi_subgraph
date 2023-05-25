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

export const WRAPPED = "0x5aea5775959fbc2557cc8789bc1bf90a239d9a91";

export const STABLE_TOKENS: string[] = [
    "0x3355df6d4c9c3035724fd0e3914de96a5a83aaf4",  // USDC
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0xfd505702b37ae9b626952eb2dd736d9045876417",  // WooRouterV2
];

export const WOO_PP_SOURCES: string[] = [
    "0x42ed123eb5266a5b8e2b54b2c76180ccf5e72fee",
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[0], STABLE_TOKENS[0]);  // USDC

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
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
    "0x0000000000000000000000000000000000000000",
];

export const BEETHOVEN_X_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const TRANSIT_SWAP_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const ZERO_X_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const ODOS_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
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
    THOR_SWAP_SOURCES,  // 14: THORSwap
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
