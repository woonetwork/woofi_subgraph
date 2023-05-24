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
export const ETHER_SYMBOL = "BNB";
export const ETHER_NAME = "bnb";

export const WRAPPED = "0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c";

export const STABLE_TOKENS: string[] = [
    "0xe9e7cea3dedca5984780bafc599bd69add087d56",  // BUSD
    "0x55d398326f99059ff775485246999027b3197955",  // USDT
    "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",  // USDC
    "0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3",  // DAI
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0xcef5be73ae943b77f9bc08859367d923c030a269",  // WooRouterV1
    "0x114f84658c99aa6ea62e3160a87a16deaf7efe83",  // WooRouterV1
    "0xc90bfe9951a4efbf20aca5ecd9966b2bf8a01294",  // WooRouterV2
    "0x4f4fd4290c9bb49764701803af6445c5b03e8f06",  // WooRouterV2
    "0x53e255e8bbf4edf16797f9885291b3ca0c70b59f",  // WooCrossChainRouterV1
    "0xd12d239b781e34e0aaa106159940803a07e31a67",  // WooCrossChainRouterV1
    "0x81004c9b697857fd54e137075b51506c739ef439",  // WooCrossChainRouterV2
    "0xfe7c30860d01e28371d40434806f4a8fcdd3a098",  // Relayer
    "0xa27a2ca24dd28ce14fb5f5844b59851f03dcf182",  // Relayer
];

export const WOO_PP_SOURCES: string[] = [
    "0xbf365ce9cfcb2d5855521985e351ba3bcf77fd3f",  // WooPPV1
    "0x8489d142da126f4ea01750e80ccaa12fd1642988",  // WooPPV1
    "0x10c24658815585851a8888f059cb4338790023f1",  // WooPPV1
    "0xec054126922a9a1918435c9072c32f1b60cb2b90",  // WooPPV2
    "0x59de3b49314bf5067719364a2cb43e8525ab93fa",  // WooPPV2
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[0], STABLE_TOKENS[1]);  // USDT
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[1], STABLE_TOKENS[1]);  // USDT
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[2], STABLE_TOKENS[1]);  // USDT
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[3], STABLE_TOKENS[0]);  // BUSD
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[4], STABLE_TOKENS[1]);  // USDT

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0xf704eaf4a68ac424c809f7c4595451b9414d2b76",
    "0x8fa8e3dd9e84094a1d2511acf1353d7e011d8f90",
    "0x13afd5e3915096b4a53d23ece1a9b4bf1ad8f524",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254eeb25477b68fb85ed929f73a960582",  // Aggregation Router V5
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x3790c9b5a9b9d9aa1c69140a5f01a57c9b868e1e",  // Aggregation Executor for V4
    "0x2a71693a4d88b4f6ae6697a87b3524c04b92ab38",  // Exchange Governance
    "0x11111112542d85b3ef69ae05771c2dccff4faa26",  // Aggregation Router V3
    "0xbaf9a5d4b0052359326a6cdab54babaa3a3a9643",  // Aggregation Executor
    "0x9c4350f527ff7f96b650ee894ae9103bdfec0432",
    "0x05ad60d9a2f1aa30ba0cdbaf1e0a0a145fbea16f",
    "0x2ed740c6e3aaf5987c7f5a4fa13b90fcc47febd7",
    "0x18101ac1d35230f1a3c005e2abaaeb25cae79e7f",
    "0x7f9e3430880580713b03670046c7e89a0a91403b",
    "0x14831f12fccc86c4f3dae41c769593df766e4353",
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x6b3d817814eabc984d51896b1015c0b89e9737ca",  // DODO Proxy 01
    "0x8f8dd7db1bda5ed3da8c9daf3bfa471c12d58486",  // DODO Proxy 02
    "0xbce44767af0a53a108b3b7ba4f740e03d228ec0a",  // WooAdapter
    "0xa128ba44b2738a558a1fdc06d6303d52d3cef8c1",  // Approve
    "0x187da347debf4221b861eeafc9808d8cf89cf5fe",  // DODOLimitOrderBot
    "0x5dcb1d7f932275e6bbc5d1ef82485992507766c1",  // WooV2Adapter
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6dd434082eab5cd134b33719ec1ff05fe985b97b",  // OpenOcean Pool
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",  // OpenOcean Exchange V2
    "0x170100a288dc3d7e83fea20441f98166b15b6df0",
    "0xdec876911cbe9428265af0d12132c52ee8642a99",
    "0xfe9a934a8607ef020adf22d4431d6ce6005aa4d3",
    "0x573d43b31f7e937117b319a4a9f098c0bf72ae05",
];

export const METAMASK_SOURCES: string[] = [
    "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",  // MetaMask
];

export const YIELD_YAK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const FIRE_BIRD_SOURCES: string[] = [
    "0x92e4f29be975c1b1eb72e77de24dccf11432a5bd",  // FireBirdRouter
    "0xb97922afa65c46a1babbf70031f7224bd3449c8e",  // FireBird Unverified Contract(assume as Adapter)
    "0xba9e5d8fb589ecd13bfcf0fa6d751c57c4ec9321",  // FireBird Unverified Contract(assume as Adapter)
    "0x32615e3f7860bd0a24c65f3e1b8c1e3abff320d5",  // FireBird Unverified Contract(assume as Adapter)
];

export const BIT_KEEP_SOURCES: string[] = [
    "0x0c9adcfc5fc5c34074bd67e402c5f9cb14ba2920",  // BitKeepRouter
    "0x22fefbe577a4dbc083bee213e546ac69aedc2c56",  // BitKeep Unverified Contract(assume as Adapter)
    "0x2a07cb9e1236a31c6e4cfd7dfd39cf1e0c5687d6",
    "0xb64d61fa39a7343a3d85e20da612e08dc7500af0",
];

export const PARA_SWAP_SOURCES: string[] = [
    "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",  // AugustusSwapper
];

export const BEETHOVEN_X_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const TRANSIT_SWAP_SOURCES: string[] = [
    "0x638f32fe09baec1fdc54f962e3e8e5f2b286aa70",  // Transit: Swap Router
    "0x09c0fa8e2cd5fb18a9cb41c8daa951d9a4b09d7a",  // Adapter
    "0x457b4c2ab9905b48511ad0d343ba528a0af5045b",  // Adapter
    "0x661d4d4785c302a56d7cb8a92f130d319bc25e4a",  // Adapter
    "0xb45a2dda996c32e93b8c47098e90ed0e7ab18e39",  // Router
    "0x661d4d4785c302a56d7cb8a92f130d319bc25e4a",  // Adapter
];

export const ZERO_X_SOURCES: string[] = [
    "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    "0xdb6f1920a889355780af7570773609bd8cb1f498",
];

export const ODOS_SOURCES: string[] = [
    "0x9f138be5aa5cc442ea7cc7d18cd9e30593ed90b9",
    "0xd4a2269719276313aa6ab7b01f91d238eba96433",
    "0xdc723b71ca7ed367624a906a008893c69f291894",
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
