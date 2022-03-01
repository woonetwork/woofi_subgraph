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
export const ETHER_SYMBOL = 'AVAX';
export const ETHER_NAME = 'avax';

export const WRAPPED = '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7';

export const STABLE_TOKENS: string[] = [
    "0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98",  // BUSD
    "0xc7198437980c041c805a1edcba50c1ce5db95118",  // USDT
    "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",  // USDC
    "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",  // DAI
    "0x1c20e891bab6b1727d14da358fae2984ed9b59eb",  // TUSD
];

// Contract Name as Variable Name
export const WOO_ROUTER = '0xa4b13ebd7bb26a09408630524f8ffd901aee8025';
export const ONE_INCH_ORDER_SOURCES: string[] = [
];
export const DODO_ORDER_SOURCES: string[] = [
];
export const OPEN_OCEAN_SOURCES: string[] = [
];
export const METAMASK_SOURCES: string[] = [
];

export const GLOBAL_VARIABLE_ID = '0';
export const ORDER_HISTORY_VARIABLE_ID = '0';

export const WOO_ROUTER_ORDER_SOURCE_ID = '0';
export const ONE_INCH_ORDER_SOURCE_ID = '1';
export const DODO_ORDER_SOURCE_ID = '2';
export const OPEN_OCEAN_ORDER_SOURCE_ID = '3';
export const METAMASK_ORDER_SOURCE_ID = '4';
export const OTHER_ORDER_SOURCE_ID = '99';
