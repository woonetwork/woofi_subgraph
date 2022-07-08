import {BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {BI_1, OTHER_ORDER_SOURCE_ID} from "./constants";
import {
    createGlobalVariable,
    createOrderHistoryVariable,
    createHourToken,
    createToken,
    createHourData,
    createDayData,
    createWooSwapHash,
    createHourOrderSource,
    createDayOrderSource,
    createOrderSource,
    createUnknownOrderSource,
} from "./create";
import {getOrderSourceIDForWooRouter} from "./utils";
import {
    updateGlobalVariableOrderSourceVolumeUSD,
    updateHourDataOrderSourceVolumeUSD,
    updateDayDataOrderSourceVolumeUSD,
} from "./update";

export function updateGlobalVariable(event: ethereum.Event, volumeUSD: BigInt, swapType: i32, fromAddress: Bytes): void {
    let globalVariable = createGlobalVariable(event);

    if (swapType == 0) {
        globalVariable.routeToWooPPVolumeUSD = globalVariable.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        globalVariable.routeToDODOVolumeUSD = globalVariable.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();

    let wooSwapHash = createWooSwapHash(event);
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        updateGlobalVariableOrderSourceVolumeUSD(event, wooSwapHash.volumeUSD, orderSourceID);
    }
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
    swapType: i32,
    fromAddress: Bytes
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

    let wooSwapHash = createWooSwapHash(event);
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        updateHourDataOrderSourceVolumeUSD(event, wooSwapHash.volumeUSD, orderSourceID);
    }
}

export function updateDayData(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromAddress: Bytes
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

    let wooSwapHash = createWooSwapHash(event);
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        updateDayDataOrderSourceVolumeUSD(event, wooSwapHash.volumeUSD, orderSourceID);
    }
}

export function updateHourOrderSource(event: ethereum.Event, fromAddress: Bytes): void {
    let wooSwapHash = createWooSwapHash(event);
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        let hourOrderSource = createHourOrderSource(event, orderSourceID);
        hourOrderSource.volumeUSD = hourOrderSource.volumeUSD.plus(wooSwapHash.volumeUSD);
        hourOrderSource.txCount = hourOrderSource.txCount.plus(BI_1);
        hourOrderSource.updatedAt = event.block.timestamp;

        hourOrderSource.save();
    }
}

export function updateDayOrderSource(event: ethereum.Event, fromAddress: Bytes): void {
    let wooSwapHash = createWooSwapHash(event);
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        let dayOrderSource = createDayOrderSource(event, orderSourceID);
        dayOrderSource.volumeUSD = dayOrderSource.volumeUSD.plus(wooSwapHash.volumeUSD);
        dayOrderSource.txCount = dayOrderSource.txCount.plus(BI_1);
        dayOrderSource.updatedAt = event.block.timestamp;

        dayOrderSource.save();
    }
}

export function updateOrderSource(event: ethereum.Event, fromAddress: Bytes): void {
    let wooSwapHash = createWooSwapHash(event);
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        let orderSource = createOrderSource(event, orderSourceID);
        if (orderSource.id == OTHER_ORDER_SOURCE_ID) {
            updateUnknownOrderSource(event, wooSwapHash.volumeUSD, fromAddress);
        }

        orderSource.volumeUSD = orderSource.volumeUSD.plus(wooSwapHash.volumeUSD);
        orderSource.txCount = orderSource.txCount.plus(BI_1);
        orderSource.updatedAt = event.block.timestamp;

        orderSource.save();
    }
}

export function updateUnknownOrderSource(event: ethereum.Event, volumeUSD: BigInt, fromAddress: Bytes): void {
    let unknownOrderSource = createUnknownOrderSource(event, fromAddress.toHexString());

    unknownOrderSource.volumeUSD = unknownOrderSource.volumeUSD.plus(volumeUSD);
    unknownOrderSource.txCount = unknownOrderSource.txCount.plus(BI_1);
    unknownOrderSource.updatedAt = event.block.timestamp;

    unknownOrderSource.save();
}

export function updateOrderHistoryVariable(event: ethereum.Event): void {
    let orderHistoryVariable = createOrderHistoryVariable(event);

    orderHistoryVariable.txCount = orderHistoryVariable.txCount.plus(BI_1);
    orderHistoryVariable.updatedAt = event.block.timestamp;

    orderHistoryVariable.save();
}
