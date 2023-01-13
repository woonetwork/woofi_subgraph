import {BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {BI_1, BI_2, STABLE_TOKENS, OTHER_ORDER_SOURCE_ID, QUOTE_TOKEN_1_V1} from "./constants";
import {
    createGlobalVariable,
    createOrderHistoryVariable,
    createHourToken,
    createToken,
    createHourData,
    createDayData,
    createWooSwapHash,
    createWooRouterSwapHash,
    createHourOrderSource,
    createDayOrderSource,
    createOrderSource,
    createUnknownDayOrderSource,
    createUnknownOrderSource,
} from "./create";
import {getOrderSourceIDForWooRouter} from "./utils";
import {
    // updateGlobalVariableOrderSourceVolumeUSD,
    // updateHourDataOrderSourceVolumeUSD,
    // updateDayDataOrderSourceVolumeUSD,
    // updateTokenOrderSourceVolumeUSD,
} from "./update";
import {WooSwapHash} from "../generated/schema";

export function updateGlobalVariable(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
): void {
    let globalVariable = createGlobalVariable(event);

    if (swapType == 0) {
        globalVariable.routeToWooPPVolumeUSD = globalVariable.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        globalVariable.routeToDODOVolumeUSD = globalVariable.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();

    // if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
    //     let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
    //     updateGlobalVariableOrderSourceVolumeUSD(event, addOrderSourceVolumeUSD, orderSourceID);
    // }
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
    toTokenAddress: Bytes,
    fromAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
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

    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        let realAddOrderSourceVolumeUSD = addOrderSourceVolumeUSD;
        if (
            STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) == -1 &&
            STABLE_TOKENS.indexOf(toTokenAddress.toHexString()) == -1
        ) {
            // let bytesQuoteToken = Bytes.fromHexString(QUOTE_TOKEN_V1) as Bytes;
            // updateTokenOrderSourceVolumeUSD(event, addOrderSourceVolumeUSD, orderSourceID, bytesQuoteToken);
            realAddOrderSourceVolumeUSD = realAddOrderSourceVolumeUSD.div(BI_2);
        }

        // updateTokenOrderSourceVolumeUSD(event, realAddOrderSourceVolumeUSD, orderSourceID, fromTokenAddress);
        // updateTokenOrderSourceVolumeUSD(event, realAddOrderSourceVolumeUSD, orderSourceID, toTokenAddress);
    }
}

export function updateHourData(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
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

    // if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
    //     let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
    //     updateHourDataOrderSourceVolumeUSD(event, addOrderSourceVolumeUSD, orderSourceID);
    // }
}

export function updateDayData(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
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

    // if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
    //     let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
    //     updateDayDataOrderSourceVolumeUSD(event, addOrderSourceVolumeUSD, orderSourceID);
    // }
}

export function updateHourOrderSource(
    event: ethereum.Event,
    fromAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
): void {
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        let hourOrderSource = createHourOrderSource(event, orderSourceID);
        hourOrderSource.volumeUSD = hourOrderSource.volumeUSD.plus(addOrderSourceVolumeUSD);
        hourOrderSource.txCount = hourOrderSource.txCount.plus(BI_1);
        hourOrderSource.updatedAt = event.block.timestamp;

        hourOrderSource.save();
    }
}

export function updateDayOrderSource(
    event: ethereum.Event,
    fromAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
): void {
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        let dayOrderSource = createDayOrderSource(event, orderSourceID);
        dayOrderSource.volumeUSD = dayOrderSource.volumeUSD.plus(addOrderSourceVolumeUSD);
        dayOrderSource.txCount = dayOrderSource.txCount.plus(BI_1);
        dayOrderSource.updatedAt = event.block.timestamp;

        dayOrderSource.save();
    }
}

export function updateOrderSource(
    event: ethereum.Event,
    fromAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
): void {
    if (wooSwapHash.getOrderSourceByWooRouterSwapFrom == true) {
        let orderSourceID = getOrderSourceIDForWooRouter(event.transaction.from.toHexString(), fromAddress.toHexString());
        let orderSource = createOrderSource(event, orderSourceID);
        if (orderSource.id == OTHER_ORDER_SOURCE_ID) {
            updateUnknownDayOrderSource(event, addOrderSourceVolumeUSD, fromAddress);
            updateUnknownOrderSource(event, addOrderSourceVolumeUSD, fromAddress);
        }

        orderSource.volumeUSD = orderSource.volumeUSD.plus(addOrderSourceVolumeUSD);
        orderSource.txCount = orderSource.txCount.plus(BI_1);
        orderSource.updatedAt = event.block.timestamp;

        orderSource.save();
    }
}

export function updateUnknownDayOrderSource(event: ethereum.Event, volumeUSD: BigInt, fromAddress: Bytes): void {
    let unknownDayOrderSource = createUnknownDayOrderSource(event, fromAddress.toHexString());

    unknownDayOrderSource.volumeUSD = unknownDayOrderSource.volumeUSD.plus(volumeUSD);
    unknownDayOrderSource.txCount = unknownDayOrderSource.txCount.plus(BI_1);
    unknownDayOrderSource.updatedAt = event.block.timestamp;

    unknownDayOrderSource.save();
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

export function updateWooRouterSwapHash(event: ethereum.Event, previousVolumeUSD: BigInt): void {
    let wooRouterSwapHash = createWooRouterSwapHash(event);
    wooRouterSwapHash.previousVolumeUSD = previousVolumeUSD;
    wooRouterSwapHash.updatedAt = event.block.timestamp;

    wooRouterSwapHash.save();
}
