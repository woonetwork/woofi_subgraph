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
    UnknownOrderSource, HourTrader, DayTrader, Trader, WooSwapHash, OrderHistoryVariable
} from "../generated/schema";
import {BI_18, BSC_STABLE_TOKENS, GLOBAL_VARIABLE_ID, ORDER_HISTORY_VARIABLE_ID, ZERO_BI} from "./constants";
import {exponentToBigInt} from "./utils";

export function createGlobalVariable(event: ethereum.Event): GlobalVariable {
    let globalVariable = GlobalVariable.load(GLOBAL_VARIABLE_ID);
    if (globalVariable == null) {
        globalVariable = new GlobalVariable(GLOBAL_VARIABLE_ID);
        globalVariable.totalTraders = ZERO_BI;
        globalVariable.totalTxCount = ZERO_BI;
        globalVariable.totalVolumeUSD = ZERO_BI;
        globalVariable.totalVolumeUSDFromWooRouter = ZERO_BI;
        globalVariable.totalVolumeUSDFromOneInch = ZERO_BI;
        globalVariable.totalVolumeUSDFromDODO = ZERO_BI;
        globalVariable.totalVolumeUSDFromOpenOcean = ZERO_BI;
        globalVariable.totalVolumeUSDFromOther = ZERO_BI;
        globalVariable.routeToWooPPVolumeUSD = ZERO_BI;
        globalVariable.routeToDODOVolumeUSD = ZERO_BI;
        globalVariable.updatedAt = event.block.timestamp;
        globalVariable.save();
    }

    return globalVariable as GlobalVariable;
}

export function createOrderHistoryVariable(event: ethereum.Event): OrderHistoryVariable {
    let orderHistoryVariable = OrderHistoryVariable.load(ORDER_HISTORY_VARIABLE_ID);
    if (orderHistoryVariable == null) {
        orderHistoryVariable = new OrderHistoryVariable(ORDER_HISTORY_VARIABLE_ID);
        orderHistoryVariable.txCount = ZERO_BI;
        orderHistoryVariable.updatedAt = event.block.timestamp;
        orderHistoryVariable.save();
    }

    return orderHistoryVariable as OrderHistoryVariable;
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
        hourToken.txCount = ZERO_BI;
        hourToken.volumeUSD = ZERO_BI;
        hourToken.routeToWooPPTxCount = ZERO_BI;
        hourToken.routeToDODOTxCount = ZERO_BI;
        hourToken.routeToWooPPVolumeUSD = ZERO_BI;
        hourToken.routeToDODOVolumeUSD = ZERO_BI;
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
        if (BSC_STABLE_TOKENS.indexOf(tokenID) != -1) {
            token.lastTradePrice = exponentToBigInt(BI_18);
        } else {
            token.lastTradePrice = ZERO_BI;
        }
        token.volumeUSD = ZERO_BI;
        token.routeToWooPPVolumeUSD = ZERO_BI;
        token.routeToDODOVolumeUSD = ZERO_BI;
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
        hourData.traders = ZERO_BI;
        hourData.txCount = ZERO_BI;
        hourData.volumeUSD = ZERO_BI;
        hourData.volumeUSDFromWooRouter = ZERO_BI;
        hourData.volumeUSDFromOneInch = ZERO_BI;
        hourData.volumeUSDFromDODO = ZERO_BI;
        hourData.volumeUSDFromOpenOcean = ZERO_BI;
        hourData.volumeUSDFromOther = ZERO_BI;
        hourData.routeToWooPPTxCount = ZERO_BI;
        hourData.routeToDODOTxCount = ZERO_BI;
        hourData.routeToWooPPVolumeUSD = ZERO_BI;
        hourData.routeToDODOVolumeUSD = ZERO_BI;
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
        dayData.traders = ZERO_BI;
        dayData.txCount = ZERO_BI;
        dayData.volumeUSD = ZERO_BI;
        dayData.volumeUSDFromWooRouter = ZERO_BI;
        dayData.volumeUSDFromOneInch = ZERO_BI;
        dayData.volumeUSDFromDODO = ZERO_BI;
        dayData.volumeUSDFromOpenOcean = ZERO_BI;
        dayData.volumeUSDFromOther = ZERO_BI;
        dayData.routeToWooPPTxCount = ZERO_BI;
        dayData.routeToDODOTxCount = ZERO_BI;
        dayData.routeToWooPPVolumeUSD = ZERO_BI;
        dayData.routeToDODOVolumeUSD = ZERO_BI;
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
        dayTrader.volumeUSD = ZERO_BI;
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
        hourOrderSource.volumeUSD = ZERO_BI;
        hourOrderSource.txCount = ZERO_BI;
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
        dayOrderSource.volumeUSD = ZERO_BI;
        dayOrderSource.txCount = ZERO_BI;
        dayOrderSource.updatedAt = event.block.timestamp;
        dayOrderSource.save();
    }

    return dayOrderSource as DayOrderSource;
}

export function createOrderSource(event: ethereum.Event, orderSourceID: string): OrderSource {
    let orderSource = OrderSource.load(orderSourceID);
    if (orderSource == null) {
        orderSource = new OrderSource(orderSourceID);
        orderSource.volumeUSD = ZERO_BI;
        orderSource.txCount = ZERO_BI;
        orderSource.updatedAt = event.block.timestamp;
        orderSource.save();
    }

    return orderSource as OrderSource;
}

export function createUnknownOrderSource(event: ethereum.Event, msgSender: string): UnknownOrderSource {
    let unknownOrderSource = UnknownOrderSource.load(msgSender);
    if (unknownOrderSource == null) {
        unknownOrderSource = new UnknownOrderSource(msgSender);
        unknownOrderSource.volumeUSD = ZERO_BI;
        unknownOrderSource.txCount = ZERO_BI;
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
        wooSwapHash.updatedAt = event.block.timestamp;
        wooSwapHash.save();
    }

    return wooSwapHash as WooSwapHash;
}
