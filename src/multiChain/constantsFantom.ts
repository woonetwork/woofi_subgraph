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
export const ETHER_SYMBOL = 'FTM';
export const ETHER_NAME = 'fantom';

export const WRAPPED = '0x21be370d5312f44cb42ce377bc9b8a0cef1a4c83';

export const STABLE_TOKENS: string[] = [
    "0x049d68029688eabf473097a2fc38ef61633a3c7a",  // USDT
    "0x04068da6c83afcfa0e13ba15a6696662335d5b75",  // USDC
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x37b5a5a730dad670874f26cc5507bb1b9705e447",  // WooRouter
    "0xcf6ce5fd6bf28bb1aeac88a55251f6c840059de5",  // WooCrossChainRouter
    "0x5b19bd330a84c049b62d5b0fc2ba120217a18c1c",  // Relayer
];

export const WOO_PP_SOURCES: string[] = [
    "0x9503e7517d3c5bc4f9e4a1c6ae4f8b33ac2546f2",
];

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x58c73f7e102bc6bcdc6b092ef0399b3e06d6b3e3",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // AggregationRouterV4
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",
];

export const METAMASK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const YIELD_YAK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const FIRE_BIRD_SOURCES: string[] = [
    "0xe0c38b2a8d09aad53f1c67734b9a95e43d5981c0",  // FireBirdRouter
];

export const BIT_KEEP_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const PARA_SWAP_SOURCES: string[] = [
    "0xdef171fe48cf0115b1d80b88dc8eab59176fee57"
];

export const BEETHOVEN_X_SOURCES: string[] = [
    "0x20dd72ed959b6147912c2e529f0a0c651c33c9ce",  // Vault
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
