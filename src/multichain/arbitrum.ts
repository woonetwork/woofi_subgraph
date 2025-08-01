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

export const WRAPPED = "0x82af49447d8a07e3bd95bd0d56f35241523fbab1";

export const STABLE_TOKENS: string[] = [
    "0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9",  // USDT
    "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",  // USDC.e
    "0xaf88d065e77c8cc2239327c5edb3a432268e5831",  // USDC
    "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",  // DAI
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x9aed3a8896a85fe9a8cac52c9b402d092b629a30",  // WooRouterV2
    "0x4c4af8dbc524681930a27b2f1af5bcc8062e6fb7",  // WooRouterV2
    "0x0972a0fa37984e7ff2aefa53a0bb10dce535aa73",  // WooCrossChainRouterV1
    "0x44df096d2600c6a6db77899db3de3aecff746cb8",  // WooCrossChainRouterV1
    "0x4ab421de52b3112d02442b040dd3dc73e8af63b5",  // WooCrossChainRouterV2
    "0xe47fec1c72850d867a1655c4c5902de7728ca205",  // WooCrossChainRouterV3
    "0xca10e8825fa9f1db0651cd48a9097997dbf7615d",  // WooCrossChainRouterV4
];

export const WOO_PP_SOURCES: string[] = [
    "0x1f79f8a65e02f8a137ce7f79c038cc44332df448",  // WooPPV2
    "0xeff23b4be1091b53205e35f3afcd9c7182bf3062",  // WooPPV2
    "0xed9e3f98bbed560e66b89aac922e29d4596a9642",  // WooPPV2
    "0x5520385bfcf07ec87c4c53a7d8d65595dff69fa4",  // WooPPV2
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[0], STABLE_TOKENS[1]);  // USDC.e
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[1], STABLE_TOKENS[1]);  // USDC.e
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[2], STABLE_TOKENS[2]);  // USDC
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[3], STABLE_TOKENS[2]);  // USDC

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0xf357ec5a6c82766aeb97d6da7488e2efc3dc0182",
];

// destination swap called by Layer Zero Relayer
export const LAYER_ZERO_SOURCES: string[] = [
    "0x177d36dbe2271a4ddb2ad8304d82628eb921d790",  // Relayer
];

export const WOOFI_SOURCES: string[] = WOO_ROUTER_SOURCES.concat(WOO_PP_SOURCES).concat(WOO_VAULT_MANAGER_SOURCES).concat(LAYER_ZERO_SOURCES);

export const WOOFI_REBATE_ADDRESSES: string[] = [];

export const ONE_INCH_REBATE_ADDRESSES: string[] = [
    "0x703a96e7d7a6d05d2d7f3f8223fd538c23897ce8",
    "0x910bf2d50fa5e014fd06666f456182d4ab7c8bd2",
];

export const DODO_REBATE_ADDRESSES: string[] = [
    "0xea8e147bdb3ee3dde2085acb88de826e1a6de37a",
    "0xce9f9716fec7b4c11c773751aa579b1908fe9f5b",
];

export const OPEN_OCEAN_REBATE_ADDRESSES: string[] = [
    "0x353c1f0bc78fbbc245b3c93ef77b1dcc5b77d2a0",
    "0x922164bbbd36acf9e854acbbf32facc949fcaeef",
];

export const METAMASK_REBATE_ADDRESSES: string[] = [];

export const YIELD_YAK_REBATE_ADDRESSES: string[] = [
    "0x5925c5c6843a8f67f7ef2b55db1f5491573c85eb",
    "0x4a6c794192831fb9f4782e61bec05d6c5cc9f3ea",
    "0x599850287dd42db3137ef82f70c5dcabc690d524",
];

export const FIRE_BIRD_REBATE_ADDRESSES: string[] = [
    "0xa20ca7c6705fb88847cbf50549d7a38f4e99d32c",
];

export const BIT_KEEP_REBATE_ADDRESSES: string[] = [
    "0x9712394caccab28acd26d41f7e0566c1e88759aa",
];

export const PARA_SWAP_REBATE_ADDRESSES: string[] = [
    "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",
    "0xd5b927956057075377263aab7f8afc12f85100db",
];

export const BEETHOVEN_X_REBATE_ADDRESSES: string[] = [];

export const TRANSIT_SWAP_REBATE_ADDRESSES: string[] = [
    "0x92106728f6efe170f8de919e1bd88c04c2473d3c",
];

export const ZERO_X_REBATE_ADDRESSES: string[] = [
    "0xbfdcbb4c05843163f491c24f9c0019c510786304",
    "0x5e01d320e95133d80dd59a2191c95728fa69036d",
];

export const ODOS_REBATE_ADDRESSES: string[] = [
    "0x3c440a8653d6bad527a96d0f8bff55a934a2a67f",
    "0x498292dc123f19bdbc109081f6cf1d0e849a9daf",
];

export const HERA_FINANCE_REBATE_ADDRESSES: string[] = [
    "0x1111110808b63f93b869a8a8ef87bc5b4dd79689",
];

export const THOR_SWAP_REBATE_ADDRESSES: string[] = [
    "0x72c6d8fcc3e591253a1eb563180d317998346bec",
];

export const OKX_REBATE_ADDRESSES: string[] = [];

export const ONTO_REBATE_ADDRESSES: string[] = [
    "0x0ce56280bf51dc8211952c3522d4e1ce917319a6",
];

export const YETI_REBATE_ADDRESSES: string[] = [
    "0x718c79e7c12f7e2c1a5d641c81d02eb7566db9a8",
];

export const JOY_REBATE_ADDRESSES: string[] = [];

export const ZETA_FARM_REBATE_ADDRESSES: string[] = [
    "0x04a285427eee8ade8dce32299478e4522fb7c287",
];

export const SLINGSHOT_REBATE_ADDRESSES: string[] = [];

export const KALM_REBATE_ADDRESSES: string[] = [];

export const UNIZEN_REBATE_ADDRESSES: string[] = [
    "0xaf951f7a4aa4e2a033b034af0897273ed553e8c3",
];

export const KYBER_SWAP_REBATE_ADDRESSES: string[] = [
    "0x4f82e73edb06d29ff62c91ec8f5ff06571bdeb29",
];

export const ONE_DELTA_REBATE_ADDRESSES: string[] = [
    "0xc95eed7f6e8334611765f84ceb8ed6270f08907e",
];

export const EISEN_REBATE_ADDRESSES: string[] = [];

export const HYPERSONIC_REBATE_ADDRESSES: string[] = [];

export const MAGPIE_REBATE_ADDRESSES: string[] = [
    "0xeeed1d103b6d628dc07e1b1d997ef2ee307fe2ff",
];

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
    KALM_REBATE_ADDRESSES,  // 21: KALM
    UNIZEN_REBATE_ADDRESSES,  // 22: unizen
    KYBER_SWAP_REBATE_ADDRESSES,  // 23: KyberSwap
    ONE_DELTA_REBATE_ADDRESSES,  // 24: 1delta
    EISEN_REBATE_ADDRESSES,  // 25: Eisen
    HYPERSONIC_REBATE_ADDRESSES,  // 26: Hypersonic
    MAGPIE_REBATE_ADDRESSES,  // 27: Magpie
];

export const GLOBAL_VARIABLE_ID = "0";
export const ORDER_HISTORY_VARIABLE_ID = "0";
export const CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID = "1";
export const CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID = "2";

export const WOOFI_ORDER_SOURCE_ID = "0";
export const OTHER_ORDER_SOURCE_ID = "99";
export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = "-99";

export const WOOFI_SWAP_TYPE = 0;
