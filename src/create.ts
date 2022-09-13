import {BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {
    GlobalVariable,
    HourToken,
    Token,
    HourData,
    DayData,
    HourOrderSource,
    DayOrderSource,
    OrderSource,
    UnknownDayOrderSource,
    UnknownOrderSource,
    HourTrader,
    DayTrader,
    Trader,
    WooSwapHash,
    WooRouterSwapHash,
    OrderHistoryVariable,
    OrderHistory,
    CrossChainSrcOrderHistory,
    CrossChainDstOrderHistory,
} from "../generated/schema";
import {
    BI_0,
    BD_0,
    BI_18,
    STABLE_TOKENS,
    GLOBAL_VARIABLE_ID,
    ORDER_HISTORY_VARIABLE_ID,
    CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID,
    CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID,
} from "./constants";
import {exponentToBigInt} from "./utils";
import {fetchTokenDecimals, fetchTokenName, fetchTokenSymbol, fetchTokenTotalSupply} from "./helpers";

export function createGlobalVariable(event: ethereum.Event): GlobalVariable {
    let globalVariable = GlobalVariable.load(GLOBAL_VARIABLE_ID);
    if (globalVariable == null) {
        globalVariable = new GlobalVariable(GLOBAL_VARIABLE_ID);
        globalVariable.totalTraders = BI_0;
        globalVariable.totalTxCount = BI_0;
        globalVariable.totalVolumeUSD = BI_0;
        globalVariable.realTotalVolumeUSD = BD_0;
        globalVariable.wooBuybackVolume = BI_0;
        globalVariable.totalVolumeUSDFromWooRouter = BI_0;
        globalVariable.totalVolumeUSDFromOneInch = BI_0;
        globalVariable.totalVolumeUSDFromDODO = BI_0;
        globalVariable.totalVolumeUSDFromOpenOcean = BI_0;
        globalVariable.totalVolumeUSDFromMetaMask = BI_0;
        globalVariable.totalVolumeUSDFromYieldYak = BI_0;
        globalVariable.totalVolumeUSDFromFireBird = BI_0;
        globalVariable.totalVolumeUSDFromBitKeep = BI_0;
        globalVariable.totalVolumeUSDFromParaSwap = BI_0;
        globalVariable.totalVolumeUSDFromBeethovenX = BI_0;
        globalVariable.totalVolumeUSDFromTransitSwap = BI_0;
        globalVariable.totalVolumeUSDFromZeroX = BI_0;
        globalVariable.totalVolumeUSDFromOther = BI_0;
        globalVariable.routeToWooPPVolumeUSD = BI_0;
        globalVariable.routeToDODOVolumeUSD = BI_0;
        globalVariable.updatedAt = event.block.timestamp;
        globalVariable.save();
    }

    return globalVariable as GlobalVariable;
}

export function createHourToken(event: ethereum.Event, tokenAddress: Bytes): HourToken {
    let timestamp = event.block.timestamp.toI32();
    let hourID = timestamp / 3600;
    let hourStartTimestamp = hourID * 3600;

    let hourTokenID = tokenAddress.toHexString().concat("-").concat(BigInt.fromI32(hourID).toString())
    let hourToken = HourToken.load(hourTokenID);
    if (hourToken == null) {
        hourToken = new HourToken(hourTokenID);
        hourToken.timestamp = BigInt.fromI32(hourStartTimestamp);
        hourToken.txCount = BI_0;
        hourToken.volume = BI_0;
        hourToken.volumeUSD = BI_0;
        hourToken.routeToWooPPTxCount = BI_0;
        hourToken.routeToDODOTxCount = BI_0;
        hourToken.routeToWooPPVolumeUSD = BI_0;
        hourToken.routeToDODOVolumeUSD = BI_0;
        hourToken.updatedAt = event.block.timestamp;
        hourToken.save();
    }

    return hourToken as HourToken;
}

export function createToken(event: ethereum.Event, tokenAddress: Bytes): Token {
    // event can be `WooRouterSwap` or `WooSwap`
    let tokenID = tokenAddress.toHexString();
    let token = Token.load(tokenID);
    if (token == null) {
        token = new Token(tokenID);
        token.symbol = fetchTokenSymbol(tokenAddress);
        token.name = fetchTokenName(tokenAddress);
        token.totalSupply = fetchTokenTotalSupply(tokenAddress);
        let decimals = fetchTokenDecimals(tokenAddress);
        token.decimals = decimals;
        if (STABLE_TOKENS.indexOf(tokenID) != -1) {
            token.lastTradePrice = exponentToBigInt(decimals);
        } else {
            token.lastTradePrice = BI_0;
        }
        token.volumeUSD = BI_0;
        token.routeToWooPPVolumeUSD = BI_0;
        token.routeToDODOVolumeUSD = BI_0;
        token.volumeUSDFromWooRouter = BI_0;
        token.volumeUSDFromOneInch = BI_0;
        token.volumeUSDFromDODO = BI_0;
        token.volumeUSDFromOpenOcean = BI_0;
        token.volumeUSDFromMetaMask = BI_0;
        token.volumeUSDFromYieldYak = BI_0;
        token.volumeUSDFromFireBird = BI_0;
        token.volumeUSDFromBitKeep = BI_0;
        token.volumeUSDFromParaSwap = BI_0;
        token.volumeUSDFromBeethovenX = BI_0;
        token.volumeUSDFromTransitSwap = BI_0;
        token.volumeUSDFromZeroX = BI_0;
        token.volumeUSDFromOther = BI_0;
        token.updatedAt = event.block.timestamp;
        token.save();
    }

    return token as Token;
}

export function createHourData(event: ethereum.Event): HourData {
    let timestamp = event.block.timestamp.toI32();
    let hourID = timestamp / 3600;
    let hourStartTimestamp = hourID * 3600;

    let hourDataID = BigInt.fromI32(hourID).toString();
    let hourData = HourData.load(hourDataID);
    if (hourData == null) {
        hourData = new HourData(hourDataID);
        hourData.timestamp = BigInt.fromI32(hourStartTimestamp);
        hourData.hour = hourStartTimestamp;
        hourData.traders = BI_0;
        hourData.txCount = BI_0;
        hourData.volumeUSD = BI_0;
        hourData.realVolumeUSD = BD_0;
        hourData.volumeUSDFromWooRouter = BI_0;
        hourData.volumeUSDFromOneInch = BI_0;
        hourData.volumeUSDFromDODO = BI_0;
        hourData.volumeUSDFromOpenOcean = BI_0;
        hourData.volumeUSDFromMetaMask = BI_0;
        hourData.volumeUSDFromYieldYak = BI_0;
        hourData.volumeUSDFromFireBird = BI_0;
        hourData.volumeUSDFromBitKeep = BI_0;
        hourData.volumeUSDFromParaSwap = BI_0;
        hourData.volumeUSDFromBeethovenX = BI_0;
        hourData.volumeUSDFromTransitSwap = BI_0;
        hourData.volumeUSDFromZeroX = BI_0;
        hourData.volumeUSDFromOther = BI_0;
        hourData.routeToWooPPTxCount = BI_0;
        hourData.routeToDODOTxCount = BI_0;
        hourData.routeToWooPPVolumeUSD = BI_0;
        hourData.routeToDODOVolumeUSD = BI_0;
        hourData.updatedAt = event.block.timestamp;
        hourData.save();
    }

    return hourData as HourData;
}

export function createDayData(event: ethereum.Event): DayData {
    let timestamp = event.block.timestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;

    let dayDataID = BigInt.fromI32(dayID).toString();
    let dayData = DayData.load(dayDataID);
    if (dayData == null) {
        dayData = new DayData(dayDataID);
        dayData.timestamp = BigInt.fromI32(dayStartTimestamp);
        dayData.date = dayStartTimestamp;
        dayData.traders = BI_0;
        dayData.txCount = BI_0;
        dayData.volumeUSD = BI_0;
        dayData.realVolumeUSD = BD_0;
        dayData.wooBuybackVolume = BI_0;
        dayData.volumeUSDFromWooRouter = BI_0;
        dayData.volumeUSDFromOneInch = BI_0;
        dayData.volumeUSDFromDODO = BI_0;
        dayData.volumeUSDFromOpenOcean = BI_0;
        dayData.volumeUSDFromMetaMask = BI_0;
        dayData.volumeUSDFromYieldYak = BI_0;
        dayData.volumeUSDFromFireBird = BI_0;
        dayData.volumeUSDFromBitKeep = BI_0;
        dayData.volumeUSDFromParaSwap = BI_0;
        dayData.volumeUSDFromBeethovenX = BI_0;
        dayData.volumeUSDFromTransitSwap = BI_0;
        dayData.volumeUSDFromZeroX = BI_0;
        dayData.volumeUSDFromOther = BI_0;
        dayData.routeToWooPPTxCount = BI_0;
        dayData.routeToDODOTxCount = BI_0;
        dayData.routeToWooPPVolumeUSD = BI_0;
        dayData.routeToDODOVolumeUSD = BI_0;
        dayData.updatedAt = event.block.timestamp;
        dayData.save();
    }

    return dayData as DayData;
}

export function createHourTrader(event: ethereum.Event, traderAddress: Bytes): HourTrader {
    let timestamp = event.block.timestamp.toI32();
    let hourID = timestamp / 3600;

    let hourTraderID = traderAddress.toHexString().concat("-").concat(BigInt.fromI32(hourID).toString());
    let hourTrader = HourTrader.load(hourTraderID);
    if (hourTrader == null) {
        hourTrader = new HourTrader(hourTraderID);
        hourTrader.tradedThisHour = false;
        hourTrader.updatedAt = event.block.timestamp;
        hourTrader.save();
    }

    return hourTrader as HourTrader;
}

export function createDayTrader(event: ethereum.Event, traderAddress: Bytes): DayTrader {
    let timestamp = event.block.timestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;

    let dayTraderID = traderAddress.toHexString().concat("-").concat(BigInt.fromI32(dayID).toString());
    let dayTrader = DayTrader.load(dayTraderID);
    if (dayTrader == null) {
        dayTrader = new DayTrader(dayTraderID);
        dayTrader.tradedToday = false;
        dayTrader.timestamp = BigInt.fromI32(dayStartTimestamp);
        dayTrader.address = traderAddress;
        dayTrader.volumeUSD = BI_0;
        dayTrader.updatedAt = event.block.timestamp;
        dayTrader.save();
    }

    return dayTrader as DayTrader;
}

export function createTrader(event: ethereum.Event, traderAddress: Bytes): Trader {
    let traderID = traderAddress.toHexString();
    let trader = Trader.load(traderID);
    if (trader == null) {
        trader = new Trader(traderID);
        trader.tradedBefore = false;
        trader.updatedAt = event.block.timestamp;
        trader.save();
    }

    return trader as Trader;
}

export function createHourOrderSource(event: ethereum.Event, orderSourceID: string): HourOrderSource {
    let timestamp = event.block.timestamp.toI32();
    let hourID = timestamp / 3600;
    let hourStartTimestamp = hourID * 3600;

    let hourOrderSourceID = orderSourceID.concat("-").concat(BigInt.fromI32(hourID).toString());
    let hourOrderSource = HourOrderSource.load(hourOrderSourceID);
    if (hourOrderSource == null) {
        hourOrderSource = new HourOrderSource(hourOrderSourceID);
        hourOrderSource.timestamp = BigInt.fromI32(hourStartTimestamp);
        hourOrderSource.volumeUSD = BI_0;
        hourOrderSource.txCount = BI_0;
        hourOrderSource.updatedAt = event.block.timestamp;
        hourOrderSource.save();
    }

    return hourOrderSource as HourOrderSource;
}

export function createDayOrderSource(event: ethereum.Event, orderSourceID: string): DayOrderSource {
    let timestamp = event.block.timestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;

    let dayOrderSourceID = orderSourceID.concat("-").concat(BigInt.fromI32(dayID).toString());
    let dayOrderSource = DayOrderSource.load(dayOrderSourceID);
    if (dayOrderSource == null) {
        dayOrderSource = new DayOrderSource(dayOrderSourceID);
        dayOrderSource.timestamp = BigInt.fromI32(dayStartTimestamp);
        dayOrderSource.volumeUSD = BI_0;
        dayOrderSource.txCount = BI_0;
        dayOrderSource.updatedAt = event.block.timestamp;
        dayOrderSource.save();
    }

    return dayOrderSource as DayOrderSource;
}

export function createOrderSource(event: ethereum.Event, orderSourceID: string): OrderSource {
    let orderSource = OrderSource.load(orderSourceID);
    if (orderSource == null) {
        orderSource = new OrderSource(orderSourceID);
        orderSource.volumeUSD = BI_0;
        orderSource.txCount = BI_0;
        orderSource.updatedAt = event.block.timestamp;
        orderSource.save();
    }

    return orderSource as OrderSource;
}

export function createUnknownDayOrderSource(event: ethereum.Event, msgSender: string): UnknownDayOrderSource {
    let timestamp = event.block.timestamp.toI32();
    let dayID = timestamp / 86400;
    let dayStartTimestamp = dayID * 86400;

    let unknownDayOrderSourceID = msgSender.concat("-").concat(BigInt.fromI32(dayID).toString());
    let unknownDayOrderSource = UnknownDayOrderSource.load(unknownDayOrderSourceID);
    if (unknownDayOrderSource == null) {
        unknownDayOrderSource = new UnknownDayOrderSource(unknownDayOrderSourceID);
        unknownDayOrderSource.timestamp = BigInt.fromI32(dayStartTimestamp);
        unknownDayOrderSource.volumeUSD = BI_0;
        unknownDayOrderSource.txCount = BI_0;
        unknownDayOrderSource.updatedAt = event.block.timestamp;
        unknownDayOrderSource.save();
    }

    return unknownDayOrderSource as UnknownDayOrderSource;
}

export function createUnknownOrderSource(event: ethereum.Event, msgSender: string): UnknownOrderSource {
    let unknownOrderSource = UnknownOrderSource.load(msgSender);
    if (unknownOrderSource == null) {
        unknownOrderSource = new UnknownOrderSource(msgSender);
        unknownOrderSource.volumeUSD = BI_0;
        unknownOrderSource.txCount = BI_0;
        unknownOrderSource.updatedAt = event.block.timestamp;
        unknownOrderSource.save();
    }

    return unknownOrderSource as UnknownOrderSource;
}

export function createWooSwapHash(event: ethereum.Event): WooSwapHash {
    let wooSwapHashID = event.transaction.hash.toHexString();
    let wooSwapHash = WooSwapHash.load(wooSwapHashID);
    if (wooSwapHash == null) {
        wooSwapHash = new WooSwapHash(wooSwapHashID);
        wooSwapHash.txSynced = false;
        wooSwapHash.volumeUSD = BI_0;
        wooSwapHash.getOrderSourceByWooRouterSwapFrom = false;
        wooSwapHash.updatedAt = event.block.timestamp;
        wooSwapHash.save();
    }

    return wooSwapHash as WooSwapHash;
}

export function createWooRouterSwapHash(event: ethereum.Event): WooRouterSwapHash {
    let wooRouterSwapHashID = event.transaction.hash.toHexString();
    let wooRouterSwapHash = WooRouterSwapHash.load(wooRouterSwapHashID);
    if (wooRouterSwapHash == null) {
        wooRouterSwapHash = new WooRouterSwapHash(wooRouterSwapHashID);
        wooRouterSwapHash.previousVolumeUSD = BI_0;
        wooRouterSwapHash.updatedAt = event.block.timestamp;
        wooRouterSwapHash.save();
    }

    return wooRouterSwapHash as WooRouterSwapHash;
}

export function createOrderHistoryVariable(event: ethereum.Event): OrderHistoryVariable {
    let orderHistoryVariable = OrderHistoryVariable.load(ORDER_HISTORY_VARIABLE_ID);
    if (orderHistoryVariable == null) {
        orderHistoryVariable = new OrderHistoryVariable(ORDER_HISTORY_VARIABLE_ID);
        orderHistoryVariable.txCount = BI_0;
        orderHistoryVariable.updatedAt = event.block.timestamp;
        orderHistoryVariable.save();
    }

    return orderHistoryVariable as OrderHistoryVariable;
}

// Only Create by WooRouter
export function createOrderHistory(
    event: ethereum.Event,
    swapType: i32,
    fromAddress: Bytes,
    toAddress: Bytes,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt
): OrderHistory {
    let orderHistoryID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
    let orderHistory = OrderHistory.load(orderHistoryID);
    if (orderHistory == null) {
        orderHistory = new OrderHistory(orderHistoryID);
        orderHistory.source = swapType;
        orderHistory.hash = event.transaction.hash;
        orderHistory.block = event.block.number;
        orderHistory.timestamp = event.block.timestamp;
        orderHistory.sender = event.transaction.from;
        orderHistory.from = fromAddress;
        orderHistory.tradedByOtherDex = event.transaction.from != fromAddress;
        orderHistory.to = toAddress;
        orderHistory.fromToken = fromTokenAddress;
        orderHistory.fromAmount = fromAmount;
        orderHistory.toToken = toTokenAddress;
        orderHistory.toAmount = toAmount;

        let orderHistoryVariable = createOrderHistoryVariable(event);
        orderHistory.txCount = orderHistoryVariable.txCount;

        orderHistory.save();
    }

    return orderHistory as OrderHistory;
}

export function createCrossChainSrcOrderHistoryVariable(event: ethereum.Event): OrderHistoryVariable {
    let orderHistoryVariable = OrderHistoryVariable.load(CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID);
    if (orderHistoryVariable == null) {
        orderHistoryVariable = new OrderHistoryVariable(CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID);
        orderHistoryVariable.txCount = BI_0;
        orderHistoryVariable.updatedAt = event.block.timestamp;
        orderHistoryVariable.save();
    }

    return orderHistoryVariable as OrderHistoryVariable;
}

// Only Create by WooCrossChainRouter
export function createCrossChainSrcOrderHistory(
    event: ethereum.Event,
    refId: BigInt,
    sender: Bytes,
    toAddress: Bytes,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    minQuoteAmount: BigInt,
    realQuoteAmount: BigInt
): CrossChainSrcOrderHistory {
    let crossChainSrcOrderHistoryID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
    let crossChainSrcOrderHistory = CrossChainSrcOrderHistory.load(crossChainSrcOrderHistoryID);
    if (crossChainSrcOrderHistory == null) {
        crossChainSrcOrderHistory = new CrossChainSrcOrderHistory(crossChainSrcOrderHistoryID);
        crossChainSrcOrderHistory.hash = event.transaction.hash;
        crossChainSrcOrderHistory.block = event.block.number;
        crossChainSrcOrderHistory.timestamp = event.block.timestamp;
        crossChainSrcOrderHistory.refId = refId;
        crossChainSrcOrderHistory.sender = sender;
        crossChainSrcOrderHistory.to = toAddress;
        crossChainSrcOrderHistory.fromToken = fromTokenAddress;
        crossChainSrcOrderHistory.fromAmount = fromAmount;
        crossChainSrcOrderHistory.minQuoteAmount = minQuoteAmount;
        crossChainSrcOrderHistory.realQuoteAmount = realQuoteAmount;

        let crossChainSrcOrderHistoryVariable = createCrossChainSrcOrderHistoryVariable(event);
        crossChainSrcOrderHistory.txCount = crossChainSrcOrderHistoryVariable.txCount;

        crossChainSrcOrderHistory.save();
    }

    return crossChainSrcOrderHistory as CrossChainSrcOrderHistory;
}

export function createCrossChainDstOrderHistoryVariable(event: ethereum.Event): OrderHistoryVariable {
    let orderHistoryVariable = OrderHistoryVariable.load(CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID);
    if (orderHistoryVariable == null) {
        orderHistoryVariable = new OrderHistoryVariable(CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID);
        orderHistoryVariable.txCount = BI_0;
        orderHistoryVariable.updatedAt = event.block.timestamp;
        orderHistoryVariable.save();
    }

    return orderHistoryVariable as OrderHistoryVariable;
}

// Only Create by WooCrossChainRouter
export function createCrossChainDstOrderHistory(
    event: ethereum.Event,
    refId: BigInt,
    sender: Bytes,
    toAddress: Bytes,
    bridgedTokenAddress: Bytes,
    bridgedAmount: BigInt,
    toTokenAddress: Bytes,
    realToToken: Bytes,
    minToAmount: BigInt,
    realToAmount: BigInt
): CrossChainDstOrderHistory {
    let crossChainDstOrderHistoryID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
    let crossChainDstOrderHistory = CrossChainDstOrderHistory.load(crossChainDstOrderHistoryID);
    if (crossChainDstOrderHistory == null) {
        crossChainDstOrderHistory = new CrossChainDstOrderHistory(crossChainDstOrderHistoryID);
        crossChainDstOrderHistory.hash = event.transaction.hash;
        crossChainDstOrderHistory.block = event.block.number;
        crossChainDstOrderHistory.timestamp = event.block.timestamp;
        crossChainDstOrderHistory.refId = refId;
        crossChainDstOrderHistory.sender = sender;
        crossChainDstOrderHistory.to = toAddress;
        crossChainDstOrderHistory.bridgedToken = bridgedTokenAddress;
        crossChainDstOrderHistory.bridgedAmount = bridgedAmount;
        crossChainDstOrderHistory.toToken = toTokenAddress;
        crossChainDstOrderHistory.realToToken = realToToken;
        crossChainDstOrderHistory.minToAmount = minToAmount;
        crossChainDstOrderHistory.realToAmount = realToAmount;

        let crossChainDstOrderHistoryVariable = createCrossChainDstOrderHistoryVariable(event);
        crossChainDstOrderHistory.txCount = crossChainDstOrderHistoryVariable.txCount;

        crossChainDstOrderHistory.save();
    }

    return crossChainDstOrderHistory as CrossChainDstOrderHistory;
}
