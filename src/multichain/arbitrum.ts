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
    "0xff970a61a04b1ca14834a43f5de4533ebddb5cc8",  // USDC
    "0xda10009cbd5d07dd0cecc66161fc93d7c9000da1",  // DAI
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x9aed3a8896a85fe9a8cac52c9b402d092b629a30",  // WooRouterV2
    "0x0972a0fa37984e7ff2aefa53a0bb10dce535aa73",  // WooCrossChainRouterV1
    "0x44df096d2600c6a6db77899db3de3aecff746cb8",  // WooCrossChainRouterV1
    "0x4ab421de52b3112d02442b040dd3dc73e8af63b5",  // WooCrossChainRouterV2
];

export const WOO_PP_SOURCES: string[] = [
    "0x1f79f8a65e02f8a137ce7f79c038cc44332df448",  // WooPPV2
    "0xeff23b4be1091b53205e35f3afcd9c7182bf3062",  // WooPPV2
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[0], STABLE_TOKENS[1]);  // USDC
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[1], STABLE_TOKENS[1]);  // USDC

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
    "0x3c440a8653d6bad527a96d0f8bff55a934a2a67f",
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

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254eeb25477b68fb85ed929f73a960582",  // Aggregation Router V5
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x11111112542d85b3ef69ae05771c2dccff4faa26",  // Aggregation Router V3
    "0x521709b3cd7f07e29722be0ba28a8ce0e806dbc3",  // 1inch Unverified Contract
    "0x64768a3a2453f1e8de9e43e92d65fc36e4c9872d",
    "0x454c8b4dc6a2affe669a3db1633133f7d305e305",
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x3b6067d4caa8a14c63fdbe6318f27a0bbc9f9237", // DODO: Proxy Route
    "0x1f076a800005c758a505e759720eb6737136e893", // WooV2Adapter
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",  // OpenOcean Exchange V2
    "0x703855c7be44426f4c1c70976979f1ef3a6e58e6",  // OpenOcean Unverified Contract(assume as Adapter)
    "0x4e6b18217ac75a779262c20b3cc07050cbe7282b",  // OpenOcean Unverified Contract(assume as Adapter)
    "0x07749429d3d9047a966b28a489500325bac9f1b6",  // OpenOcean Unverified Contract(assume as Adapter)
    "0xb5d99a61a5d34e3edfeea052483f49f7a922e248",
    "0x1e82ad8a12068a85fcb96368463b434e77b21201",
    "0x2691f337abeb0146f16441ca4f82f363275851d5",
];

export const METAMASK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const YIELD_YAK_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const FIRE_BIRD_SOURCES: string[] = [
    "0x0c6134abc08a1eafc3e2dc9a5ad023bb08da86c3",  // FireBirdRouter
    "0x984742be1901fcbed70d7b5847bee5be006d91c8",  // FireBird Unverified Contract(assume as Adapter)
    "0xbbe84caaf62dba7081e1f1cc2c1f83f156587114",  // FireBird Unverified Contract(assume as Adapter)
    "0x350e44fc8d033ab9cd5f832288f0c8f0ceed795f",
    "0x8dd6ae22d7db82d559a2aa295ecd8904c8355ad3",
    "0x97ff1e6a1bad1d491912172edb4e25337c366f9c",
    "0x1f5a3c42f26b72c917b3625c7a964ca33600fa25",
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
    "0xb45a2dda996c32e93b8c47098e90ed0e7ab18e39",  // Router
    "0xf7a2f863299c17dfa11cd8a14e7c7dca92f315b9",  // Adapter
];

export const ZERO_X_SOURCES: string[] = [
    "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    "0xdb6f1920a889355780af7570773609bd8cb1f498",
];

export const ODOS_SOURCES: string[] = [
    "0xdd94018f54e565dbfc939f7c44a16e163faab331",  // OdosRouter
    "0xc160e4fe967f8ada7b58d9c578267ebbec1e7a63",  // Adaptor
    "0xa5abf0fb3a51af318c48abb6478d350060009b84",  // Adaptor
    "0xe5b1145b272bea861f5bb84f424b4e55590c75e8",
    "0x549a2f915a1f4e9655d71cbdbf5e055ec357efae",
    "0xcfedfa1734528a1ad96a5ee999b034623785c6ae",
];

export const HERA_FINANCE_SOURCES: string[] = [
    "0x1bd717c5cdd133e1985628e1e194b0ed9c9047e7",
];

export const THOR_SWAP_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const OKX_SOURCES: string[] = [
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
    THOR_SWAP_SOURCES,  // 14: THORSwap
    OKX_SOURCES,  // 15: OKX
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
];

export const GLOBAL_VARIABLE_ID = "0";
export const ORDER_HISTORY_VARIABLE_ID = "0";
export const CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID = "1";
export const CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID = "2";

export const WOO_ROUTER_ORDER_SOURCE_ID = "0";
export const OTHER_ORDER_SOURCE_ID = "99";
export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = "-99";

export const WOOFI_SWAP_TYPE = 0;
