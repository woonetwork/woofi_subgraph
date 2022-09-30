import {BigDecimal, BigInt} from "@graphprotocol/graph-ts/index";

export let BI_0 = BigInt.fromI32(0);
export let BI_1 = BigInt.fromI32(1);
export let BI_2 = BigInt.fromI32(2);
export let BI_6 = BigInt.fromI32(6);
export let BI_8 = BigInt.fromI32(8);
export let BI_18 = BigInt.fromI32(18);

export let BD_0 = BigDecimal.fromString('0');
export let BD_1 = BigDecimal.fromString('1');

// Address Must Be Lower Case!!!
export const ETHER = '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee';
export const ETHER_SYMBOL = 'ETH';
export const ETHER_NAME = 'eth';

export const WRAPPED = '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1';

export const STABLE_TOKENS: string[] = [
    "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",  // USDT
    "0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8",  // USDC
    "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",  // DAI
];

export const QUOTE_TOKEN = '0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8';

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0xb130a49065178465931d4f887056328CeA5D723f",  // WooRouter
    // "",  // WooCrossChainRouter
    // "",  // Relayer
];

export const WOO_PP_SOURCES: string[] = [
    "0xc04362CF21E6285E295240E30c056511DF224Cf4",
];

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    // "",
    "0x0000000000000000000000000000000000000000",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x11111112542d85b3ef69ae05771c2dccff4faa26",  // Aggregation Router V3
];

export const DODO_ORDER_SOURCES: string[] = [
    // "",  // DODO: Router
    // "",  // WooAdapter
    "0x0000000000000000000000000000000000000000",
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",  // OpenOcean Exchange V2
    "0x703855c7be44426f4c1c70976979f1ef3a6e58e6",  // OpenOcean Unverified Contract(assume as Adapter)
];

export const METAMASK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",  // MetaMask
];

export const YIELD_YAK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const FIRE_BIRD_SOURCES: string[] = [
    // "",  // FireBirdRouter
    // "",  // FireBird Unverified Contract(assume as Adapter)
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
    // "0x8b48715c5d6d1645663a4c460ea85ce846b8580e",
    // "0x1c64a6a28a4e789e65b22715a751249f2aa6e1d2",
    "0x0000000000000000000000000000000000000000",
];

export const ZERO_X_SOURCES: string[] = [
    "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    "0xdb6f1920a889355780af7570773609bd8cb1f498",
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
];

export const GLOBAL_VARIABLE_ID = '0';
export const ORDER_HISTORY_VARIABLE_ID = '0';
export const CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID = '1';
export const CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID = '2';

export const WOO_ROUTER_ORDER_SOURCE_ID = '0';
export const ONE_INCH_ORDER_SOURCE_ID = '1';
export const DODO_ORDER_SOURCE_ID = '2';
export const OPEN_OCEAN_ORDER_SOURCE_ID = '3';
export const METAMASK_ORDER_SOURCE_ID = '4';
export const YIELD_YAK_ORDER_SOURCE_ID = '5';
export const FIRE_BIRD_ORDER_SOURCE_ID = '6';
export const BIT_KEEP_ORDER_SOURCE_ID = '7';
export const PARA_SWAP_ORDER_SOURCE_ID = '8';
export const BEETHOVEN_X_ORDER_SOURCE_ID = '9';
export const TRANSIT_SWAP_ORDER_SOURCE_ID = '10';
export const ZERO_X_ORDER_SOURCE_ID = '11';
export const OTHER_ORDER_SOURCE_ID = '99';

export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = '-99';
