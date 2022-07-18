import {exponentToBigInt} from "./utils";
import {Address, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {createDayData, createGlobalVariable, createHourData, createToken} from "./create";
import {
    BI_2,
    ETHER,
    WRAPPED,
    STABLE_TOKENS,
    WOO_ROUTER_ORDER_SOURCE_ID,
    ONE_INCH_ORDER_SOURCE_ID,
    DODO_ORDER_SOURCE_ID,
    OPEN_OCEAN_ORDER_SOURCE_ID,
    METAMASK_ORDER_SOURCE_ID,
    YIELD_YAK_ORDER_SOURCE_ID,
    FIRE_BIRD_ORDER_SOURCE_ID,
    BIT_KEEP_ORDER_SOURCE_ID,
    PARA_SWAP_ORDER_SOURCE_ID,
    BEETHOVEN_X_ORDER_SOURCE_ID,
    TRANSIT_SWAP_ORDER_SOURCE_ID,
    GET_ORDER_SOURCE_BY_WOO_ROUTER_SWAP_FROM_ID,
} from "./constants";
import {BigInt} from "@graphprotocol/graph-ts";

export function updateTokenPrice(event: ethereum.Event, fromTokenAddress: Bytes, fromAmount: BigInt, toTokenAddress: Bytes, toAmount: BigInt): void {
    if (fromTokenAddress.toHexString() == WRAPPED) {
        fromTokenAddress = Address.fromString(ETHER);
    }
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    if (STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) != -1) {  // fromToken is Stable Coin
        toToken.lastTradePrice = fromAmount.times(exponentToBigInt(toToken.decimals.times(BI_2)))
          .div(exponentToBigInt(fromToken.decimals)).div(toAmount);
        toToken.save();
    } else if (STABLE_TOKENS.indexOf(toTokenAddress.toHexString()) != -1) {  // toToken is Stable Coin
        fromToken.lastTradePrice = toAmount.times(exponentToBigInt(fromToken.decimals.times(BI_2)))
          .div(exponentToBigInt(toToken.decimals)).div(fromAmount);
        fromToken.save();
    }
}

export function updateGlobalVariableOrderSourceVolumeUSD(event: ethereum.Event, volumeUSD: BigInt, orderSourceID: string): void {
    let globalVariable = createGlobalVariable(event);
    if (orderSourceID == WOO_ROUTER_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromWooRouter = globalVariable.totalVolumeUSDFromWooRouter.plus(volumeUSD);
    } else if (orderSourceID == ONE_INCH_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromOneInch = globalVariable.totalVolumeUSDFromOneInch.plus(volumeUSD);
    } else if (orderSourceID == DODO_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromDODO = globalVariable.totalVolumeUSDFromDODO.plus(volumeUSD);
    } else if (orderSourceID == OPEN_OCEAN_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromOpenOcean = globalVariable.totalVolumeUSDFromOpenOcean.plus(volumeUSD);
    } else if (orderSourceID == METAMASK_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromMetaMask = globalVariable.totalVolumeUSDFromMetaMask.plus(volumeUSD);
    } else if (orderSourceID == YIELD_YAK_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromYieldYak = globalVariable.totalVolumeUSDFromYieldYak.plus(volumeUSD);
    } else if (orderSourceID == FIRE_BIRD_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromFireBird = globalVariable.totalVolumeUSDFromFireBird.plus(volumeUSD);
    } else if (orderSourceID == BIT_KEEP_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromBitKeep = globalVariable.totalVolumeUSDFromBitKeep.plus(volumeUSD);
    } else if (orderSourceID == PARA_SWAP_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromParaSwap = globalVariable.totalVolumeUSDFromParaSwap.plus(volumeUSD);
    } else if (orderSourceID == BEETHOVEN_X_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromBeethovenX = globalVariable.totalVolumeUSDFromBeethovenX.plus(volumeUSD);
    } else if (orderSourceID == TRANSIT_SWAP_ORDER_SOURCE_ID) {
        globalVariable.totalVolumeUSDFromTransitSwap = globalVariable.totalVolumeUSDFromTransitSwap.plus(volumeUSD);
    } else {
        globalVariable.totalVolumeUSDFromOther = globalVariable.totalVolumeUSDFromOther.plus(volumeUSD);
    }
    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();
}

export function updateHourDataOrderSourceVolumeUSD(event: ethereum.Event, volumeUSD: BigInt, orderSourceID: string): void {
    let hourData = createHourData(event);
    if (orderSourceID == WOO_ROUTER_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromWooRouter = hourData.volumeUSDFromWooRouter.plus(volumeUSD);
    } else if (orderSourceID == ONE_INCH_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromOneInch = hourData.volumeUSDFromOneInch.plus(volumeUSD);
    } else if (orderSourceID == DODO_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromDODO = hourData.volumeUSDFromDODO.plus(volumeUSD);
    } else if (orderSourceID == OPEN_OCEAN_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromOpenOcean = hourData.volumeUSDFromOpenOcean.plus(volumeUSD);
    } else if (orderSourceID == METAMASK_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromMetaMask = hourData.volumeUSDFromMetaMask.plus(volumeUSD);
    } else if (orderSourceID == YIELD_YAK_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromYieldYak = hourData.volumeUSDFromYieldYak.plus(volumeUSD);
    } else if (orderSourceID == FIRE_BIRD_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromFireBird = hourData.volumeUSDFromFireBird.plus(volumeUSD);
    } else if (orderSourceID == BIT_KEEP_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromBitKeep = hourData.volumeUSDFromBitKeep.plus(volumeUSD);
    } else if (orderSourceID == PARA_SWAP_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromParaSwap = hourData.volumeUSDFromParaSwap.plus(volumeUSD);
    } else if (orderSourceID == BEETHOVEN_X_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromBeethovenX = hourData.volumeUSDFromBeethovenX.plus(volumeUSD);
    } else if (orderSourceID == TRANSIT_SWAP_ORDER_SOURCE_ID) {
        hourData.volumeUSDFromTransitSwap = hourData.volumeUSDFromTransitSwap.plus(volumeUSD);
    } else {
        hourData.volumeUSDFromOther = hourData.volumeUSDFromOther.plus(volumeUSD);
    }
    hourData.updatedAt = event.block.timestamp;

    hourData.save();
}

export function updateDayDataOrderSourceVolumeUSD(event: ethereum.Event, volumeUSD: BigInt, orderSourceID: string): void {
    let dayData = createDayData(event);
    if (orderSourceID == WOO_ROUTER_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromWooRouter = dayData.volumeUSDFromWooRouter.plus(volumeUSD);
    } else if (orderSourceID == ONE_INCH_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromOneInch = dayData.volumeUSDFromOneInch.plus(volumeUSD);
    } else if (orderSourceID == DODO_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromDODO = dayData.volumeUSDFromDODO.plus(volumeUSD);
    } else if (orderSourceID == OPEN_OCEAN_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromOpenOcean = dayData.volumeUSDFromOpenOcean.plus(volumeUSD);
    } else if (orderSourceID == METAMASK_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromMetaMask = dayData.volumeUSDFromMetaMask.plus(volumeUSD);
    } else if (orderSourceID == YIELD_YAK_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromYieldYak = dayData.volumeUSDFromYieldYak.plus(volumeUSD);
    } else if (orderSourceID == FIRE_BIRD_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromFireBird = dayData.volumeUSDFromFireBird.plus(volumeUSD);
    } else if (orderSourceID == BIT_KEEP_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromBitKeep = dayData.volumeUSDFromBitKeep.plus(volumeUSD);
    } else if (orderSourceID == PARA_SWAP_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromParaSwap = dayData.volumeUSDFromParaSwap.plus(volumeUSD);
    } else if (orderSourceID == BEETHOVEN_X_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromBeethovenX = dayData.volumeUSDFromBeethovenX.plus(volumeUSD);
    } else if (orderSourceID == TRANSIT_SWAP_ORDER_SOURCE_ID) {
        dayData.volumeUSDFromTransitSwap = dayData.volumeUSDFromTransitSwap.plus(volumeUSD);
    } else {
        dayData.volumeUSDFromOther = dayData.volumeUSDFromOther.plus(volumeUSD);
    }
    dayData.updatedAt = event.block.timestamp;

    dayData.save();
}
