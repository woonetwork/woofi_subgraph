import {BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {BI_1} from "./constants";
import {
    createGlobalVariable,
    createOrderHistoryVariable,
    createHourToken,
    createToken,
    createHourData,
    createDayData,
} from "./create";

export function updateGlobalVariable(event: ethereum.Event, volumeUSD: BigInt, swapType: i32): void {
    let globalVariable = createGlobalVariable(event);

    if (swapType == 0) {
        globalVariable.routeToWooPPVolumeUSD = globalVariable.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        globalVariable.routeToDODOVolumeUSD = globalVariable.routeToDODOVolumeUSD.plus(volumeUSD);
    }

    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();
}

export function updateHourToken(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes
): void {
    let fromHourToken = createHourToken(event, fromTokenAddress);
    let toHourToken = createHourToken(event, toTokenAddress);

    if (swapType == 0) {
        fromHourToken.routeToWooPPTxCount = fromHourToken.routeToWooPPTxCount.plus(BI_1);
        fromHourToken.routeToWooPPVolumeUSD = fromHourToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromHourToken.routeToDODOTxCount = fromHourToken.routeToDODOTxCount.plus(BI_1);
        fromHourToken.routeToDODOVolumeUSD = fromHourToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    fromHourToken.save();

    if (swapType == 0) {
        toHourToken.routeToWooPPTxCount = toHourToken.routeToWooPPTxCount.plus(BI_1);
        toHourToken.routeToWooPPVolumeUSD = toHourToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toHourToken.routeToDODOTxCount = toHourToken.routeToDODOTxCount.plus(BI_1);
        toHourToken.routeToDODOVolumeUSD = toHourToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    toHourToken.save();
}

export function updateToken(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes
): void {
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    if (swapType == 0) {
        fromToken.routeToWooPPVolumeUSD = fromToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromToken.routeToDODOVolumeUSD = fromToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    fromToken.save();

    if (swapType == 0) {
        toToken.routeToWooPPVolumeUSD = toToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toToken.routeToDODOVolumeUSD = toToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    toToken.save();
}

export function updateHourData(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32
): void {
    let hourData = createHourData(event);

    if (swapType == 0) {
        hourData.routeToWooPPTxCount = hourData.routeToWooPPTxCount.plus(BI_1);
        hourData.routeToWooPPVolumeUSD = hourData.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        hourData.routeToDODOTxCount = hourData.routeToDODOTxCount.plus(BI_1);
        hourData.routeToDODOVolumeUSD = hourData.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    hourData.save();
}

export function updateDayData(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32
): void {
    let dayData = createDayData(event);

    if (swapType == 0) {
        dayData.routeToWooPPTxCount = dayData.routeToWooPPTxCount.plus(BI_1);
        dayData.routeToWooPPVolumeUSD = dayData.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        dayData.routeToDODOTxCount = dayData.routeToDODOTxCount.plus(BI_1);
        dayData.routeToDODOVolumeUSD = dayData.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    dayData.save();
}

export function updateOrderHistoryVariable(event: ethereum.Event): void {
    let orderHistoryVariable = createOrderHistoryVariable(event);

    orderHistoryVariable.txCount = orderHistoryVariable.txCount.plus(BI_1);
    orderHistoryVariable.updatedAt = event.block.timestamp;

    orderHistoryVariable.save();
}
