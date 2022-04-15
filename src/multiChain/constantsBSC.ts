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
export const ETHER_SYMBOL = 'BNB';
export const ETHER_NAME = 'bnb';

export const WRAPPED = '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c';

export const STABLE_TOKENS: string[] = [
    "0xe9e7cea3dedca5984780bafc599bd69add087d56",  // BUSD
    "0x55d398326f99059ff775485246999027b3197955",  // USDT
    "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",  // USDC
    "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",  // DAI
];

// Contract Name as Variable Name
export const WOO_ROUTER = '0x114f84658c99aa6ea62e3160a87a16deaf7efe83';
export const WOO_PP = '0xbf365ce9cfcb2d5855521985e351ba3bcf77fd3f';
export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x3790c9b5a9b9d9aa1c69140a5f01a57c9b868e1e",  // Aggregation Executor for V4
    "0x2a71693a4d88b4f6ae6697a87b3524c04b92ab38",  // Exchange Governance
    "0x11111112542d85b3ef69ae05771c2dccff4faa26",  // Aggregation Router V3
    "0xbaf9a5d4b0052359326a6cdab54babaa3a3a9643",  // Aggregation Executor
];
export const DODO_ORDER_SOURCES: string[] = [
    "0x6b3d817814eabc984d51896b1015c0b89e9737ca",  // DODO Proxy 01
    "0x8f8dd7db1bda5ed3da8c9daf3bfa471c12d58486",  // DODO Proxy 02
    "0xbce44767af0a53a108b3b7ba4f740e03d228ec0a",  // WooAdapter
    "0xa128ba44b2738a558a1fdc06d6303d52d3cef8c1",  // Approve
];
export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6dd434082eab5cd134b33719ec1ff05fe985b97b",  // OpenOcean Pool(Maybe)
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
]

export const GLOBAL_VARIABLE_ID = '0';
export const ORDER_HISTORY_VARIABLE_ID = '0';

export const WOO_ROUTER_ORDER_SOURCE_ID = '0';
export const ONE_INCH_ORDER_SOURCE_ID = '1';
export const DODO_ORDER_SOURCE_ID = '2';
export const OPEN_OCEAN_ORDER_SOURCE_ID = '3';
export const METAMASK_ORDER_SOURCE_ID = '4';
export const YIELD_YAK_ORDER_SOURCE_ID = '5';
export const FIRE_BIRD_ORDER_SOURCE_ID = '6';
export const OTHER_ORDER_SOURCE_ID = '99';
