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

export const WRAPPED = "0x4200000000000000000000000000000000000006";

export const STABLE_TOKENS: string[] = [
    "0x94b008aa00579c1307b0ef2c499ad98a8ce58e58",  // USDT
    "0x7f5c764cbc14f9669b88837ca1490cca17c31607",  // USDC
    "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",  // DAI
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0xeaf1ac8e89ea0ae13e0f03634a4ff23502527024",  // WooRouterV2
    "0x655e2fe03fe19327239b5294a556965192386a7b",  // WooCrossChainRouterV1
    "0xbeae1b06949d033da628ba3e5af267c3e740494b",  // WooCrossChainRouterV2
    "0x81e792e5a9003cc1c8bf5569a00f34b65d75b017",  // Relayer
];

export const WOO_PP_SOURCES: string[] = [
    "0xd1778f9df3eee5473a9640f13682e3846f61febc",  // WooPPV2
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[0], STABLE_TOKENS[1]);  // USDC

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",  // No WooVaultManager on Optimism
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254eeb25477b68fb85ed929f73a960582",  // Aggregation Router V5
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x11111112542d85b3ef69ae05771c2dccff4faa26",  // Aggregation Router V3
    "0xff3cdca6db902617e6ae4133cb45df41c38222b1",  // Adapter
    "0xf0694acc9e941b176e17b9ef923e71e7b8b2477a",  // Adapter
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",  // OpenOcean Exchange V2
    "0x4e6b18217ac75a779262c20b3cc07050cbe7282b",  // OpenOcean Unverified Contract(assume as Adapter)
    "0x1aa298ae7c53d8dafa200ed49608649bfa76a446",  // OpenOcean Unverified Contract(assume as Adapter)
];

export const METAMASK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const YIELD_YAK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const FIRE_BIRD_SOURCES: string[] = [
    "0x0c6134abc08a1eafc3e2dc9a5ad023bb08da86c3",  // FireBirdRouter
    "0xbbe84caaf62dba7081e1f1cc2c1f83f156587114",  // FireBird Unverified Contract(assume as Adapter)
    "0x350e44fc8d033ab9cd5f832288f0c8f0ceed795f",  // FireBird Unverified Contract(assume as Adapter)
];

export const BIT_KEEP_SOURCES: string[] = [
    "0x0bb624b3881e4c860f6e4ddc5b6070802ec6a87b",
];

export const PARA_SWAP_SOURCES: string[] = [
    "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",  // AugustusSwapper
];

export const BEETHOVEN_X_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const TRANSIT_SWAP_SOURCES: string[] = [
    "0xb45a2dda996c32e93b8c47098e90ed0e7ab18e39",  // Router
    "0xf7a2f863299c17dfa11cd8a14e7c7dca92f315b9",  // Adapter
];

export const ZERO_X_SOURCES: string[] = [
    "0xa3128d9b7cca7d5af29780a56abeec12b05a6740",
];

export const ODOS_SOURCES: string[] = [
    "0x69dd38645f7457be13571a847ffd905f9acbaf6d",  // OdosRouter
    "0x045da4625b1e680bb8b1c2c7696612b440a0017e",  // Adaptor
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
