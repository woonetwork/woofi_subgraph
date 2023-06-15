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

// destination swap called by Layer Zero Relayer
export const LAYER_ZERO_SOURCES: string[] = [
    "0xfe7c30860d01e28371d40434806f4a8fcdd3a098",  // Relayer
    "0xa27a2ca24dd28ce14fb5f5844b59851f03dcf182",  // Relayer
];

export const WOOFI_SOURCES: string[] = WOO_ROUTER_SOURCES.concat(WOO_PP_SOURCES).concat(WOO_VAULT_MANAGER_SOURCES).concat(LAYER_ZERO_SOURCES);

export const WOOFI_REBATE_ADDRESSES: string[] = [];

export const ONE_INCH_REBATE_ADDRESSES: string[] = [
    "0x703a96e7d7a6d05d2d7f3f8223fd538c23897ce8",
    "0x910bf2d50fa5e014fd06666f456182d4ab7c8bd2",
];

export const DODO_REBATE_ADDRESSES: string[] = [
    "0xea8e147bdb3ee3dde2085acb88de826e1a6de37a",
];

export const OPEN_OCEAN_REBATE_ADDRESSES: string[] = [
    "0x353c1f0bc78fbbc245b3C93ef77b1DCC5b77D2A0",
];

export const METAMASK_REBATE_ADDRESSES: string[] = [];

export const YIELD_YAK_REBATE_ADDRESSES: string[] = [
    "0x5925C5c6843A8F67f7Ef2b55Db1f5491573C85Eb",
];

export const FIRE_BIRD_REBATE_ADDRESSES: string[] = [
    "0xa20ca7c6705fb88847cbf50549d7a38f4e99d32c",
];

export const BIT_KEEP_REBATE_ADDRESSES: string[] = [
    "0x9712394CAcCAb28acd26d41F7e0566C1e88759aA",
];

export const PARA_SWAP_REBATE_ADDRESSES: string[] = [
    "0xDEF171Fe48CF0115B1d80b88dc8eAB59176FEe57",
];

export const BEETHOVEN_X_REBATE_ADDRESSES: string[] = [];

export const TRANSIT_SWAP_REBATE_ADDRESSES: string[] = [
    "0x92106728f6efe170f8de919e1bd88c04c2473d3c",
];

export const ZERO_X_REBATE_ADDRESSES: string[] = [
    "0xBfdcBB4C05843163F491C24f9c0019c510786304",
];

export const ODOS_REBATE_ADDRESSES: string[] = [
    "0xb13D1210DedD20F974457a73eAA8AC3D6F04cD28",
];

export const HERA_FINANCE_REBATE_ADDRESSES: string[] = [
    "0x1111110808b63f93b869a8a8ef87bc5b4dd79689",
];

export const THOR_SWAP_REBATE_ADDRESSES: string[] = [
    "0x72c6D8fCc3E591253a1Eb563180d317998346bec",
];

export const OKX_REBATE_ADDRESSES: string[] = [];

export const ONTO_REBATE_ADDRESSES: string[] = [
    "0x0ce56280bf51dc8211952c3522d4e1ce917319a6",
];

export const YETI_REBATE_ADDRESSES: string[] = [
    "0x718c79e7c12f7e2c1a5d641c81d02eb7566db9a8",
];

export const JOY_REBATE_ADDRESSES: string[] = [
    "0x80a2ee7b55dd0910e0087b3a80f5f5fded666666",
];

export const ZETA_FARM_REBATE_ADDRESSES: string[] = [
    "0x04a285427eee8ade8dce32299478e4522fb7c287",
];

export const SLINGSHOT_REBATE_ADDRESSES: string[] = [];

export let REBATE_ADDRESSES: string[][] = [
    WOOFI_REBATE_ADDRESSES,  // 0: WOOFi
    ONE_INCH_REBATE_ADDRESSES,  // 1: 1inch
    DODO_REBATE_ADDRESSES,  // 2: DODO
    OPEN_OCEAN_REBATE_ADDRESSES,  // 3: OpenOcean
    METAMASK_REBATE_ADDRESSES,  // 4: MetaMask
    YIELD_YAK_REBATE_ADDRESSES,  // 5: YieldYak
    FIRE_BIRD_REBATE_ADDRESSES,  // 6: FireBird
    BIT_KEEP_REBATE_ADDRESSES,  // 7: BitKeep
    PARA_SWAP_REBATE_ADDRESSES,  // 8: ParaSwap
    BEETHOVEN_X_REBATE_ADDRESSES,  // 9: BeethovenX
    TRANSIT_SWAP_REBATE_ADDRESSES,  // 10: TransitSwap
    ZERO_X_REBATE_ADDRESSES,  // 11: 0x
    ODOS_REBATE_ADDRESSES,  // 12: ODOS
    HERA_FINANCE_REBATE_ADDRESSES,  // 13: HeraFinance
    THOR_SWAP_REBATE_ADDRESSES,  // 14: THORSwap
    OKX_REBATE_ADDRESSES,  // 15: OKX
    ONTO_REBATE_ADDRESSES,  // 16: ONTO
    YETI_REBATE_ADDRESSES,  // 17: Yeti
    JOY_REBATE_ADDRESSES,  // 18: Joy
    ZETA_FARM_REBATE_ADDRESSES,  // 19: ZetaFarm
    SLINGSHOT_REBATE_ADDRESSES,  // 20: Slingshot
];

export const GLOBAL_VARIABLE_ID = "0";
export const ORDER_HISTORY_VARIABLE_ID = "0";
export const CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID = "1";
export const CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID = "2";

export const WOOFI_ORDER_SOURCE_ID = "0";
export const OTHER_ORDER_SOURCE_ID = "99";
export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = "-99";

export const WOOFI_SWAP_TYPE = 0;
