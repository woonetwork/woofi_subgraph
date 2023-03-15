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
    "0xc7198437980c041c805a1edcba50c1ce5db95118",  // USDT.e
    "0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664",  // USDC.e
    "0xd586e7f844cea2f87f50152665bcbc2c279d8d70",  // DAI.e
    "0x1c20e891bab6b1727d14da358fae2984ed9b59eb",  // TUSD
    "0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7",  // USDT
    "0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e",  // USDC
];

export const QUOTE_TOKEN_1_V1 = '0xc7198437980c041c805a1edcba50c1ce5db95118';
export const QUOTE_TOKEN_2_V1 = '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e';
export const QUOTE_TOKENS_V1: string[] = [QUOTE_TOKEN_1_V1, QUOTE_TOKEN_2_V1];

export const QUOTE_TOKEN_1_V2 = '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e';
export const QUOTE_TOKENS_V2: string[] = [QUOTE_TOKEN_1_V2];

// Contract Name as Variable Name
export const WOO_ROUTER_SOURCES: string[] = [
    "0x5aa6a4e96a9129562e2fc06660d07feddaaf7854",  // WooRouterV1
    "0x3e0da0a9e4139b32b37710784b8dca643c152001",  // WooRouterV1
    "0x160020b09ded3d862f7f851b5c50632bcf2062ff",  // WooRouterV1
    "0xc22fbb3133df781e6c25ea6acebe2d2bb8cea2f9",  // WooRouterV2
    "0xdf37f7a85d4563f39a78494568824b4df8669b7a",  // WooCrossChainRouterV1
    "0x1e6bb552ac038c6afb6ec5db6b06fdd106e31e33",  // WooCrossChainRouterV1
    "0x51af494f1b4d3f77835951fa827d66fc4a18dae8",  // WooCrossChainRouterV2
    "0x6f475642a6e85809b1c36fa62763669b1b48dd5b",  // Relayer
    "0xcd2e3622d483c7dc855f72e5eafadcd577ac78b4",  // Relayer
];

export const WOO_PP_SOURCES: string[] = [
    "0x1df3009c57a8b143c6246149f00b090bce3b8f88",  // WooPPV1
    "0xf8ce0d043891b62c55380fb1efbfb4f186153d96",  // WooPPV1
    "0x3b3e4b4741e91af52d0e9ad8660573e951c88524",  // WooPPV2
];

export const WOO_VAULT_MANAGER_SOURCES: string[] = [
    "0x48419c93d0d3b2428cd02bbcdeabd3aafc107f85",
    "0xfd7ed9d3d4fd88595af6a87f798ffdb42b4d7ccb",
];

export const ONE_INCH_ORDER_SOURCES: string[] = [
    "0x1111111254eeb25477b68fb85ed929f73a960582",  // Aggregation Router V5
    "0x1111111254fb6c44bac0bed2854e76f90643097d",  // Aggregation Router V4
    "0x7d18d5ba1fa30da1ad757c57eb643564ca02922d",  // 1inch Unverified Contract
    "0x73f0a6927a3c04e679074e70dfb9105f453e799d",  // 1inch Unverified Contract
    "0xd41b24bba51fac0e4827b6f94c0d6ddeb183cd64",  // 1inch Unverified Contract

    "0x2b42affd4b7c14d9b7c2579229495c052672ccd3",  // Socket: Registry
    "0xbdf50eae568ecef74796ed6022a0d453e8432410",  // Socket: One Inch Swap Implementation
    "0x4e66794586cc9c53a8c604d77b4ce3d39b1cff7c",  // 1inch Unverified Contract
    "0xf01ef4051130cc8871fa0c17024a6d62e379e856",
];

export const DODO_ORDER_SOURCES: string[] = [
    "0x409e377a7affb1fd3369cfc24880ad58895d1dd9",  // DODORouteProxy
    "0xc9143e54021f4a6d33b9b89dbb9f458aaedd56fb",  // WooAdapter
];

export const OPEN_OCEAN_SOURCES: string[] = [
    "0x6352a56caadc4f1e25cd6c75970fa768a3304e64",  // OpenOcean: Exchange V2
    "0x12cfe671e9b186f21d9852d69bdbfe3f8ac9ecb1",  // OpenOcean Unverified Contract
    "0x8d2b7e5501eb6d92f8e349f2febe785dd070be74",  // OpenOcean Unverified Contract
    "0x07749429d3d9047a966b28a489500325bac9f1b6",  // OpenOcean Unverified Contract
];

export const METAMASK_SOURCES: string[] = [
    "0x1a1ec25dc08e98e5e93f1104b5e5cdd298707d31",  // MetaMask
];

export const YIELD_YAK_SOURCES: string[] = [
    "0xc4729e56b831d74bbc18797e0e17a295fa77488c",  // YakRouter
    "0xe5a6a4279d1517231a84fae629e433b312fe89d7",  // WoofiAdapter
    "0xa64c5c58fc1510de3ff2ee644e030d666b660ea6",  // WoofiAdapter
    "0x443a28ae2dc8e1d71327b2c6eedf03be8077538d",  // WoofiV2Adapter
];

export const FIRE_BIRD_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const BIT_KEEP_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const PARA_SWAP_SOURCES: string[] = [
    "0xdef171fe48cf0115b1d80b88dc8eab59176fee57",  // AugustusSwapper
    "0xae02eca9445ec43b53118dd41658db17eab55987",  // ParaSwapLiquiditySwapAdapter
];

export const BEETHOVEN_X_SOURCES: string[] = [
    "0x0000000000000000000000000000000000000000",
];

export const TRANSIT_SWAP_SOURCES: string[] = [
    "0x57a8aa38d670f025385c5eb2eed47b96a1dbdf94",
    "0xc8d7899f22bc4995c8176e3f2a5ba3f5e87d95e5",
    "0xb45a2dda996c32e93b8c47098e90ed0e7ab18e39",  // Router
    "0xf7a2f863299c17dfa11cd8a14e7c7dca92f315b9",  // Adapter
];

export const ZERO_X_SOURCES: string[] = [
    "0xdef1c0ded9bec7f1a1670819833240f027b25eff",
    "0xdb6f1920a889355780af7570773609bd8cb1f498",
];

export const ODOS_SOURCES: string[] = [
    "0xfe7ce93ac0f78826cd81d506b07fe9f459c00214",  // OdosRouter
    "0xea584ef9aa0a6b1d0b6782043ebfbc0bdd037adb",  // Adaptor
    "0xe4614d81bd262d62b09867c915d556c508b7036f",  // Adaptor
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
export const TRANSIT_SWAP_ORDER_SOURCE_ID = '10';
export const ZERO_X_ORDER_SOURCE_ID = '11';
export const ODOS_ORDER_SOURCE_ID = '12';
export const OTHER_ORDER_SOURCE_ID = '99';

export const GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID = '-99';
