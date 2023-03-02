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
        globalVariable.routerToWooPPVolumeUSD = globalVariable.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        globalVariable.routerToThirdPartyVolumeUSD = globalVariable.routerToThirdPartyVolumeUSD.plus(volumeUSD);
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
        fromHourToken.routerToWooPPTxns = fromHourToken.routerToWooPPTxns.plus(BI_1);
        fromHourToken.routerToWooPPVolumeUSD = fromHourToken.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromHourToken.routerToThirdPartyTxns = fromHourToken.routerToThirdPartyTxns.plus(BI_1);
        fromHourToken.routerToThirdPartyVolumeUSD = fromHourToken.routerToThirdPartyVolumeUSD.plus(volumeUSD);
    }
    fromHourToken.save();

    if (swapType == 0) {
        toHourToken.routerToWooPPTxns = toHourToken.routerToWooPPTxns.plus(BI_1);
        toHourToken.routerToWooPPVolumeUSD = toHourToken.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toHourToken.routerToThirdPartyTxns = toHourToken.routerToThirdPartyTxns.plus(BI_1);
        toHourToken.routerToThirdPartyVolumeUSD = toHourToken.routerToThirdPartyVolumeUSD.plus(volumeUSD);
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
        fromToken.routerToWooPPVolumeUSD = fromToken.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromToken.routerToThirdPartyVolumeUSD = fromToken.routerToThirdPartyVolumeUSD.plus(volumeUSD);
    }
    fromToken.save();

    if (swapType == 0) {
        toToken.routerToWooPPVolumeUSD = toToken.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toToken.routerToThirdPartyVolumeUSD = toToken.routerToThirdPartyVolumeUSD.plus(volumeUSD);
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
        hourData.routerToWooPPTxns = hourData.routerToWooPPTxns.plus(BI_1);
        hourData.routerToWooPPVolumeUSD = hourData.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        hourData.routerToThirdPartyTxns = hourData.routerToThirdPartyTxns.plus(BI_1);
        hourData.routerToThirdPartyVolumeUSD = hourData.routerToThirdPartyVolumeUSD.plus(volumeUSD);
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
        dayData.routerToWooPPTxns = dayData.routerToWooPPTxns.plus(BI_1);
        dayData.routerToWooPPVolumeUSD = dayData.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        dayData.routerToThirdPartyTxns = dayData.routerToThirdPartyTxns.plus(BI_1);
        dayData.routerToThirdPartyVolumeUSD = dayData.routerToThirdPartyVolumeUSD.plus(volumeUSD);
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
        hourOrderSource.txns = hourOrderSource.txns.plus(BI_1);
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
        dayOrderSource.txns = dayOrderSource.txns.plus(BI_1);
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
        orderSource.txns = orderSource.txns.plus(BI_1);
        orderSource.updatedAt = event.block.timestamp;

        orderSource.save();
    }
}

export function updateUnknownDayOrderSource(event: ethereum.Event, volumeUSD: BigInt, fromAddress: Bytes): void {
    let unknownDayOrderSource = createUnknownDayOrderSource(event, fromAddress.toHexString());

    unknownDayOrderSource.volumeUSD = unknownDayOrderSource.volumeUSD.plus(volumeUSD);
    unknownDayOrderSource.txns = unknownDayOrderSource.txns.plus(BI_1);
    unknownDayOrderSource.updatedAt = event.block.timestamp;

    unknownDayOrderSource.save();
}

export function updateUnknownOrderSource(event: ethereum.Event, volumeUSD: BigInt, fromAddress: Bytes): void {
    let unknownOrderSource = createUnknownOrderSource(event, fromAddress.toHexString());

    unknownOrderSource.volumeUSD = unknownOrderSource.volumeUSD.plus(volumeUSD);
    unknownOrderSource.txns = unknownOrderSource.txns.plus(BI_1);
    unknownOrderSource.updatedAt = event.block.timestamp;

    unknownOrderSource.save();
}

export function updateOrderHistoryVariable(event: ethereum.Event): void {
    let orderHistoryVariable = createOrderHistoryVariable(event);

    orderHistoryVariable.txns = orderHistoryVariable.txns.plus(BI_1);
    orderHistoryVariable.updatedAt = event.block.timestamp;

    orderHistoryVariable.save();
}

export function updateWooRouterSwapHash(event: ethereum.Event, previousVolumeUSD: BigInt): void {
    let wooRouterSwapHash = createWooRouterSwapHash(event);
    wooRouterSwapHash.previousVolumeUSD = previousVolumeUSD;
    wooRouterSwapHash.updatedAt = event.block.timestamp;

    wooRouterSwapHash.save();
}
