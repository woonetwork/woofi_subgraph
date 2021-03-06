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
export const ETHER_SYMBOL = 'MATIC';
export const ETHER_NAME = 'matic';

export const WRAPPED = '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270';

export const STABLE_TOKENS: string[] = [
    "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",  // USDT
    "0x2791bca1f2de4661ed88a30c99a7a9449aa84174",  // USDC
    "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",  // DAI
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x9d1a92e601db0901e69bd810029f2c14bcca3128",  // WooRouter
    "0x376d567c5794cfc64c74852a9db2105e0b5b482c",  // WooCrossChainRouter
    "0xfe7c30860d01e28371d40434806f4a8fcdd3a098",  // Relayer
];

export const WOO_PP_SOURCES: string[] = [
    "0x7400b665c8f4f3a951a99f1ee9872efb8778723d",
];

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x2e668bb88287675e34c8df82686dfd0b7f0c0383",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x11111112542d85b3ef69ae05771c2dccff4faa26",  // Aggregation Router V3
    "0x13927a60c7bf4d3d00e3c1593e0ec713e35d2106",  // 1inch Unverified Contract(assume as Adapter)
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x2fa4334cfd7c56a0e7ca02bd81455205fcbdc5e9",  // DODO: Router
    "0x6e59a9d2b86d004ce8d67da19fc0ee24e2417d9d",  // WooAdapter
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",  // OpenOcean Exchange V2
    "0x703855c7be44426f4c1c70976979f1ef3a6e58e6",  // OpenOcean Unverified Contract(assume as Adapter)
];

export const METAMASK_SOURCES: string[] = [
    "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",  // MetaMask
];

export const YIELD_YAK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const FIRE_BIRD_SOURCES: string[] = [
    "0xb31d1b1ea48ce4bf10ed697d44b747287e785ad4",  // FireBirdRouter
    "0xe6862672bb084cd2f0a98725142950ddbcba7d97",  // FireBird Unverified Contract(assume as Adapter)
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
    "0x8b48715c5d6d1645663a4c460ea85ce846b8580e",
    "0x1c64a6a28a4e789e65b22715a751249f2aa6e1d2",
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
export const OTHER_ORDER_SOURCE_ID = '99';

export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = '-99';
