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
export const ETHER_SYMBOL = "AVAX";
export const ETHER_NAME = "avax";

export const WRAPPED = "0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7";

export const STABLE_TOKENS: string[] = [
    "0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98",  // BUSD
    "0xc7198437980c041c805a1edcba50c1ce5db95118",  // USDT.e
    "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",  // USDC.e
    "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",  // DAI.e
    "0x1c20e891bab6b1727d14da358fae2984ed9b59eb",  // TUSD
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",  // USDT
    "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",  // USDC
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x5aa6a4e96a9129562e2fc06660d07feddaaf7854",  // WooRouterV1
    "0x3e0da0a9e4139b32b37710784b8dca643c152001",  // WooRouterV1
    "0x160020b09ded3d862f7f851b5c50632bcf2062ff",  // WooRouterV1
    "0xc22fbb3133df781e6c25ea6acebe2d2bb8cea2f9",  // WooRouterV2
    "0xdf37f7a85d4563f39a78494568824b4df8669b7a",  // WooCrossChainRouterV1
    "0x1e6bb552ac038c6afb6ec5db6b06fdd106e31e33",  // WooCrossChainRouterV1
    "0x51af494f1b4d3f77835951fa827d66fc4a18dae8",  // WooCrossChainRouterV2
];

export const WOO_PP_SOURCES: string[] = [
    "0x1df3009c57a8b143c6246149f00b090bce3b8f88",  // WooPPV1
    "0xf8ce0d043891b62c55380fb1efbfb4f186153d96",  // WooPPV1
    "0x3b3e4b4741e91af52d0e9ad8660573e951c88524",  // WooPPV2
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[0], STABLE_TOKENS[6]);  // USDC
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[1], STABLE_TOKENS[1]);  // USDT.e
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[2], STABLE_TOKENS[6]);  // USDC

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x48419c93d0d3b2428cd02bbcdeabd3aafc107f85",
    "0xfd7ed9d3d4fd88595af6a87f798ffdb42b4d7ccb",
];

// destination swap called by Layer Zero Relayer
export const LAYER_ZERO_SOURCES: string[] = [
    "0x6f475642a6e85809b1c36fa62763669b1b48dd5b",  // Relayer
    "0xcd2e3622d483c7dc855f72e5eafadcd577ac78b4",  // Relayer
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
    "0x353c1f0bc78fbbc245b3c93ef77b1dcc5b77d2a0",
];

export const METAMASK_REBATE_ADDRESSES: string[] = [];

export const YIELD_YAK_REBATE_ADDRESSES: string[] = [
    "0x5925c5c6843a8f67f7ef2b55db1f5491573c85eb",
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
];

export const ODOS_REBATE_ADDRESSES: string[] = [
    "0xb863a381661b0ca6d5fd17b8a187fed768004592",
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
];

export const GLOBAL_VARIABLE_ID = "0";
export const ORDER_HISTORY_VARIABLE_ID = "0";
export const CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID = "1";
export const CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID = "2";

export const WOOFI_ORDER_SOURCE_ID = "0";
export const OTHER_ORDER_SOURCE_ID = "99";
export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = "-99";

export const WOOFI_SWAP_TYPE = 0;
