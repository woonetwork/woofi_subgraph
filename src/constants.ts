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

export const WRAPPED = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270';

export const STABLE_TOKENS: string[] = [
    "0xc2132D05D31c914a87C6611C10748AEb04B58e8F",  // USDT
    "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174",  // USDC
    "0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063",  // DAI
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x9D1A92e601db0901e69bd810029F2C14bCCA3128",
];

export const WOO_PP_SOURCES: string[] = [
    "0x7400B665C8f4f3a951a99f1ee9872efb8778723d",
];

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x2e668Bb88287675e34c8dF82686dfd0b7F0c0383",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
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
    "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",  // MetaMask
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
export const OTHER_ORDER_SOURCE_ID = '99';
