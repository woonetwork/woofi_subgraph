import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
    GlobalVariable,
    WooSwapHash,
    WooRouterSwapHash,
    OrderHistoryVariable,
    OrderHistory,
    HourToken,
    Token,
    HourData,
    DayData,
    HourTrader,
    DayTrader,
    Trader,
    HourOrderSource,
    DayOrderSource,
    OrderSource,
    UnknownDayOrderSource,
    UnknownOrderSource,
    CrossChainSrcOrderHistory,
    CrossChainDstOrderHistory,
    HourRebate,
    StargateBridgeSendMsg,
} from "../generated/schema";
import {
    BI_0,
    STABLE_TOKENS,
    GLOBAL_VARIABLE_ID,
    ORDER_HISTORY_VARIABLE_ID,
    CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID,
    CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID,
} from "./constants";
import { exponentToBigInt } from "./utils";
import { fetchTokenSymbol, fetchTokenName, fetchTokenTotalSupply, fetchTokenDecimals } from "./helpers";

export function createGlobalVariable(event: ethereum.Event): GlobalVariable {
    let entity = GlobalVariable.load(GLOBAL_VARIABLE_ID);
    if (entity === null) {
        entity = new GlobalVariable(GLOBAL_VARIABLE_ID);
        entity.totalTraders = BI_0;
        entity.totalTxns = BI_0;
        entity.totalVolumeUSD = BI_0;
        entity.buybackVolumeWOO = BI_0;
        entity.routerToWooPPVolumeUSD = BI_0;
        entity.routerToThirdPartyVolumeUSD = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as GlobalVariable;
}

export function createHourToken(event: ethereum.Event, tokenAddress: Bytes): HourToken {
    let hourID = event.block.timestamp.toI32() / 3600;
    let hourUTCTimestamp = hourID * 3600;
    let entityID = tokenAddress.toHexString().concat("-").concat(BigInt.fromI32(hourID).toString());

    let entity = HourToken.load(entityID);
    if (entity === null) {
        entity = new HourToken(entityID);
        entity.timestamp = BigInt.fromI32(hourUTCTimestamp);
        entity.txns = BI_0;
        entity.volume = BI_0;
        entity.volumeUSD = BI_0;
        entity.routerToWooPPTxns = BI_0;
        entity.routerToWooPPVolumeUSD = BI_0;
        entity.routerToThirdPartyTxns = BI_0;
        entity.routerToThirdPartyVolumeUSD = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as HourToken;
}

export function createToken(event: ethereum.Event, tokenAddress: Bytes): Token {
    let entityID = tokenAddress.toHexString();
    let entity = Token.load(entityID);
    if (entity === null) {
        entity = new Token(entityID);
        entity.symbol = fetchTokenSymbol(tokenAddress);
        entity.name = fetchTokenName(tokenAddress);
        entity.totalSupply = fetchTokenTotalSupply(tokenAddress);
        let decimals = fetchTokenDecimals(tokenAddress);
        entity.decimals = decimals;
        if (STABLE_TOKENS.indexOf(entityID) !== -1) {
            entity.lastTradePrice = exponentToBigInt(decimals);
        } else {
            entity.lastTradePrice = BI_0;
        }
        entity.volumeUSD = BI_0;
        entity.routerToWooPPVolumeUSD = BI_0;
        entity.routerToThirdPartyVolumeUSD = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as Token;
}

export function createHourData(event: ethereum.Event): HourData {
    let hourID = event.block.timestamp.toI32() / 3600;
    let hourUTCTimestamp = hourID * 3600;
    let entityID = BigInt.fromI32(hourID).toString();

    let entity = HourData.load(entityID);
    if (entity === null) {
        entity = new HourData(entityID);
        entity.timestamp = BigInt.fromI32(hourUTCTimestamp);
        entity.traders = BI_0;
        entity.txns = BI_0;
        entity.volumeUSD = BI_0;
        entity.routerToWooPPTxns = BI_0;
        entity.routerToWooPPVolumeUSD = BI_0;
        entity.routerToThirdPartyTxns = BI_0;
        entity.routerToThirdPartyVolumeUSD = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as HourData;
}

export function createDayData(event: ethereum.Event): DayData {
    let dayID = event.block.timestamp.toI32() / 86400;
    let dayUTC0Timestamp = dayID * 86400;
    let entityID = BigInt.fromI32(dayID).toString();

    let entity = DayData.load(entityID);
    if (entity === null) {
        entity = new DayData(entityID);
        entity.timestamp = BigInt.fromI32(dayUTC0Timestamp);
        entity.traders = BI_0;
        entity.txns = BI_0;
        entity.volumeUSD = BI_0;
        entity.buybackVolumeWOO = BI_0;
        entity.routerToWooPPTxns = BI_0;
        entity.routerToWooPPVolumeUSD = BI_0;
        entity.routerToThirdPartyTxns = BI_0;
        entity.routerToThirdPartyVolumeUSD = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as DayData;
}

export function createHourTrader(event: ethereum.Event, traderAddress: Bytes): HourTrader {
    let hourID = event.block.timestamp.toI32() / 3600;

    let entityID = traderAddress.toHexString().concat("-").concat(BigInt.fromI32(hourID).toString());
    let entity = HourTrader.load(entityID);
    if (entity === null) {
        entity = new HourTrader(entityID);
        entity.tradedThisHour = false;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as HourTrader;
}

export function createDayTrader(event: ethereum.Event, traderAddress: Bytes): DayTrader {
    let dayID = event.block.timestamp.toI32() / 86400;
    let dayUTC0Timestamp = dayID * 86400;
    let entityID = traderAddress.toHexString().concat("-").concat(BigInt.fromI32(dayID).toString());

    let entity = DayTrader.load(entityID);
    if (entity === null) {
        entity = new DayTrader(entityID);
        entity.tradedToday = false;
        entity.timestamp = BigInt.fromI32(dayUTC0Timestamp);
        entity.address = traderAddress;
        entity.volumeUSD = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as DayTrader;
}

export function createTrader(event: ethereum.Event, traderAddress: Bytes): Trader {
    let entityID = traderAddress.toHexString();
    let entity = Trader.load(entityID);
    if (entity === null) {
        entity = new Trader(entityID);
        entity.tradedBefore = false;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as Trader;
}

export function createHourOrderSource(event: ethereum.Event, orderSourceID: string): HourOrderSource {
    let hourID = event.block.timestamp.toI32() / 3600;
    let hourUTCTimestamp = hourID * 3600;
    let entityID = orderSourceID.concat("-").concat(BigInt.fromI32(hourID).toString());

    let entity = HourOrderSource.load(entityID);
    if (entity === null) {
        entity = new HourOrderSource(entityID);
        entity.timestamp = BigInt.fromI32(hourUTCTimestamp);
        entity.volumeUSD = BI_0;
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as HourOrderSource;
}

export function createDayOrderSource(event: ethereum.Event, orderSourceID: string): DayOrderSource {
    let dayID = event.block.timestamp.toI32() / 86400;
    let dayUTC0Timestamp = dayID * 86400;
    let entityID = orderSourceID.concat("-").concat(BigInt.fromI32(dayID).toString());

    let entity = DayOrderSource.load(entityID);
    if (entity === null) {
        entity = new DayOrderSource(entityID);
        entity.timestamp = BigInt.fromI32(dayUTC0Timestamp);
        entity.volumeUSD = BI_0;
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as DayOrderSource;
}

export function createOrderSource(event: ethereum.Event, orderSourceID: string): OrderSource {
    let entity = OrderSource.load(orderSourceID);
    if (entity === null) {
        entity = new OrderSource(orderSourceID);
        entity.volumeUSD = BI_0;
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as OrderSource;
}

export function createUnknownDayOrderSource(event: ethereum.Event, msgSender: string): UnknownDayOrderSource {
    let dayID = event.block.timestamp.toI32() / 86400;
    let dayUTCTimestamp = dayID * 86400;
    let entityID = msgSender.concat("-").concat(BigInt.fromI32(dayID).toString());

    let entity = UnknownDayOrderSource.load(entityID);
    if (entity === null) {
        entity = new UnknownDayOrderSource(entityID);
        entity.timestamp = BigInt.fromI32(dayUTCTimestamp);
        entity.volumeUSD = BI_0;
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as UnknownDayOrderSource;
}

export function createUnknownOrderSource(event: ethereum.Event, msgSender: string): UnknownOrderSource {
    let entity = UnknownOrderSource.load(msgSender);
    if (entity === null) {
        entity = new UnknownOrderSource(msgSender);
        entity.volumeUSD = BI_0;
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as UnknownOrderSource;
}

export function createWooSwapHash(event: ethereum.Event): WooSwapHash {
    let entityID = event.transaction.hash.toHexString();
    let entity = WooSwapHash.load(entityID);
    if (entity === null) {
        entity = new WooSwapHash(entityID);
        entity.txnSynced = false;
        entity.volumeUSD = BI_0;
        entity.getOrderSourceByWooRouterSwapFrom = false;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as WooSwapHash;
}

export function createWooRouterSwapHash(event: ethereum.Event): WooRouterSwapHash {
    let entityID = event.transaction.hash.toHexString();
    let entity = WooRouterSwapHash.load(entityID);
    if (entity === null) {
        entity = new WooRouterSwapHash(entityID);
        entity.previousVolumeUSD = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as WooRouterSwapHash;
}

export function createOrderHistoryVariable(event: ethereum.Event): OrderHistoryVariable {
    let entity = OrderHistoryVariable.load(ORDER_HISTORY_VARIABLE_ID);
    if (entity === null) {
        entity = new OrderHistoryVariable(ORDER_HISTORY_VARIABLE_ID);
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as OrderHistoryVariable;
}

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
    // only create by WooRouter
    let entityID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
    let entity = OrderHistory.load(entityID);
    if (entity === null) {
        entity = new OrderHistory(entityID);
        entity.source = swapType;
        entity.hash = event.transaction.hash;
        entity.block = event.block.number;
        entity.timestamp = event.block.timestamp;
        entity.user = event.transaction.from;
        entity.from = fromAddress;
        entity.tradedByOtherContract = event.transaction.from != fromAddress;
        entity.to = toAddress;
        entity.fromToken = fromTokenAddress;
        entity.fromAmount = fromAmount;
        entity.toToken = toTokenAddress;
        entity.toAmount = toAmount;

        let orderHistoryVariable = createOrderHistoryVariable(event);
        entity.txns = orderHistoryVariable.txns;

        entity.save();
    }

    return entity as OrderHistory;
}

export function createCrossChainSrcOrderHistoryVariable(event: ethereum.Event): OrderHistoryVariable {
    let entity = OrderHistoryVariable.load(CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID);
    if (entity === null) {
        entity = new OrderHistoryVariable(CROSS_CHAIN_SRC_ORDER_HISTORY_VARIABLE_ID);
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as OrderHistoryVariable;
}

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
    // only create by WooCrossChainRouter
    let entityID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
    let entity = CrossChainSrcOrderHistory.load(entityID);
    if (entity === null) {
        entity = new CrossChainSrcOrderHistory(entityID);
        entity.hash = event.transaction.hash;
        entity.block = event.block.number;
        entity.timestamp = event.block.timestamp;
        entity.refId = refId;
        entity.sender = sender;
        entity.to = toAddress;
        entity.fromToken = fromTokenAddress;
        entity.fromAmount = fromAmount;
        entity.minQuoteAmount = minQuoteAmount;
        entity.realQuoteAmount = realQuoteAmount;

        let crossChainSrcOrderHistoryVariable = createCrossChainSrcOrderHistoryVariable(event);
        entity.txns = crossChainSrcOrderHistoryVariable.txns;

        let stargateBridgeSendMsg = createStargateBridgeSendMsg(event);
        entity.stargateBridgeSendMsgNonce = stargateBridgeSendMsg.nonce;

        entity.save();
    }

    return entity as CrossChainSrcOrderHistory;
}

export function createCrossChainDstOrderHistoryVariable(event: ethereum.Event): OrderHistoryVariable {
    let entity = OrderHistoryVariable.load(CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID);
    if (entity === null) {
        entity = new OrderHistoryVariable(CROSS_CHAIN_DST_ORDER_HISTORY_VARIABLE_ID);
        entity.txns = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as OrderHistoryVariable;
}

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
    // only create by WooCrossChainRouter
    let entityID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
    let entity = CrossChainDstOrderHistory.load(entityID);
    if (entity === null) {
        entity = new CrossChainDstOrderHistory(entityID);
        entity.hash = event.transaction.hash;
        entity.block = event.block.number;
        entity.timestamp = event.block.timestamp;
        entity.refId = refId;
        entity.sender = sender;
        entity.to = toAddress;
        entity.bridgedToken = bridgedTokenAddress;
        entity.bridgedAmount = bridgedAmount;
        entity.toToken = toTokenAddress;
        entity.realToToken = realToToken;
        entity.minToAmount = minToAmount;
        entity.realToAmount = realToAmount;

        let crossChainDstOrderHistoryVariable = createCrossChainDstOrderHistoryVariable(event);
        entity.txns = crossChainDstOrderHistoryVariable.txns;

        entity.save();
    }

    return entity as CrossChainDstOrderHistory;
}

export function createHourRebate(event: ethereum.Event, rebateToAddress: Bytes): HourRebate {
    let hourID = event.block.timestamp.toI32() / 3600;
    let hourUTCTimestamp = hourID * 3600;
    let entityID = rebateToAddress.toHexString().concat("-").concat(BigInt.fromI32(hourID).toString());

    let entity = HourRebate.load(entityID);
    if (entity === null) {
        entity = new HourRebate(entityID);
        entity.timestamp = BigInt.fromI32(hourUTCTimestamp);
        entity.swapFee = BI_0;
        entity.rebateFee = BI_0;
        entity.wooSwaps = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as HourRebate;
}

export function createStargateBridgeSendMsg(event: ethereum.Event): StargateBridgeSendMsg {
    let entityID = event.transaction.hash.toHexString();
    let entity = StargateBridgeSendMsg.load(entityID);
    if (entity === null) {
        entity = new StargateBridgeSendMsg(entityID);
        entity.msgType = BI_0.toI32();
        entity.nonce = BI_0;
        entity.updatedAt = event.block.timestamp;
        entity.save();
    }

    return entity as StargateBridgeSendMsg;
}
