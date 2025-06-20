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
export const ETHER_SYMBOL = "BERA";
export const ETHER_NAME = "bera";

export const WRAPPED = "0x6969696969696969696969696969696969696969";

export const STABLE_TOKENS: string[] = [
    "0x549943e04f40284185054145c6e4e9568c1d3241",  // USDC.e
];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x4c4af8dbc524681930a27b2f1af5bcc8062e6fb7",  // WooRouterV2
];

export const WOO_PP_SOURCES: string[] = [
    "0x5520385bfcf07ec87c4c53a7d8d65595dff69fa4",  // WooPPV2
];

export let WOO_PP_QUOTE_TOKENS = new TypedMap<string, string>();
WOO_PP_QUOTE_TOKENS.set(WOO_PP_SOURCES[0], STABLE_TOKENS[0]);  // USDC.e

export const WOO_VAULT_MANAGER_SOURCES: string[] = [];

// destination swap called by Layer Zero Relayer
export const LAYER_ZERO_SOURCES: string[] = [];

export const WOOFI_SOURCES: string[] = WOO_ROUTER_SOURCES.concat(WOO_PP_SOURCES).concat(WOO_VAULT_MANAGER_SOURCES).concat(LAYER_ZERO_SOURCES);

export const WOOFI_REBATE_ADDRESSES: string[] = [];

export const ONE_INCH_REBATE_ADDRESSES: string[] = [];

export const DODO_REBATE_ADDRESSES: string[] = [];

export const OPEN_OCEAN_REBATE_ADDRESSES: string[] = [];

export const METAMASK_REBATE_ADDRESSES: string[] = [];

export const YIELD_YAK_REBATE_ADDRESSES: string[] = [];

export const FIRE_BIRD_REBATE_ADDRESSES: string[] = [];

export const BIT_KEEP_REBATE_ADDRESSES: string[] = [];

export const PARA_SWAP_REBATE_ADDRESSES: string[] = [];

export const BEETHOVEN_X_REBATE_ADDRESSES: string[] = [];

export const TRANSIT_SWAP_REBATE_ADDRESSES: string[] = [];

export const ZERO_X_REBATE_ADDRESSES: string[] = [];

export const ODOS_REBATE_ADDRESSES: string[] = [
    "0x498292dc123f19bdbc109081f6cf1d0e849a9daf",
];

export const HERA_FINANCE_REBATE_ADDRESSES: string[] = [];

export const THOR_SWAP_REBATE_ADDRESSES: string[] = [];

export const OKX_REBATE_ADDRESSES: string[] = [];

export const ONTO_REBATE_ADDRESSES: string[] = [];

export const YETI_REBATE_ADDRESSES: string[] = [];

export const JOY_REBATE_ADDRESSES: string[] = [];

export const ZETA_FARM_REBATE_ADDRESSES: string[] = [];

export const SLINGSHOT_REBATE_ADDRESSES: string[] = [];

export const KALM_REBATE_ADDRESSES: string[] = [];

export const UNIZEN_REBATE_ADDRESSES: string[] = [];

export const KYBER_SWAP_REBATE_ADDRESSES: string[] = [
    "0x4f82e73edb06d29ff62c91ec8f5ff06571bdeb29",
];

export const ONE_DELTA_REBATE_ADDRESSES: string[] = [];

export const EISEN_REBATE_ADDRESSES: string[] = [];

export const HYPERSONIC_REBATE_ADDRESSES: string[] = [];

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
];

export const GLOBAL_VARIABLE_ID = "0";
export const ORDER_HISTORY_VARIABLE_ID = "0";
export const CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID = "1";
export const CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID = "2";

export const WOOFI_ORDER_SOURCE_ID = "0";
export const OTHER_ORDER_SOURCE_ID = "99";
export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = "-99";

export const WOOFI_SWAP_TYPE = 0;
