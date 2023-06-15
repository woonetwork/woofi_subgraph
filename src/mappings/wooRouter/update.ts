import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { BI_1, WOOFI_SWAP_TYPE } from "../../constants";
import {
    createGlobalVariable,
    createHourToken,
    createToken,
    createHourData,
    createDayData,
    createUnknownDayOrderSource,
    createUnknownOrderSource,
    createWooRouterSwapHash,
    createOrderHistoryVariable,
} from "../../create";

export function updateGlobalVariable(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32
): void {
    let globalVariable = createGlobalVariable(event);

    if (swapType === WOOFI_SWAP_TYPE) {
        globalVariable.routerToWooPPVolumeUSD = globalVariable.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        globalVariable.routerToThirdPartyVolumeUSD = globalVariable.routerToThirdPartyVolumeUSD.plus(volumeUSD);
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

    if (swapType === WOOFI_SWAP_TYPE) {
        fromHourToken.routerToWooPPTxns = fromHourToken.routerToWooPPTxns.plus(BI_1);
        fromHourToken.routerToWooPPVolumeUSD = fromHourToken.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromHourToken.routerToThirdPartyTxns = fromHourToken.routerToThirdPartyTxns.plus(BI_1);
        fromHourToken.routerToThirdPartyVolumeUSD = fromHourToken.routerToThirdPartyVolumeUSD.plus(volumeUSD);
    }
    fromHourToken.save();

    if (swapType === WOOFI_SWAP_TYPE) {
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
    toTokenAddress: Bytes
): void {
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    if (swapType === WOOFI_SWAP_TYPE) {
        fromToken.routerToWooPPVolumeUSD = fromToken.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromToken.routerToThirdPartyVolumeUSD = fromToken.routerToThirdPartyVolumeUSD.plus(volumeUSD);
    }
    fromToken.save();

    if (swapType === WOOFI_SWAP_TYPE) {
        toToken.routerToWooPPVolumeUSD = toToken.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toToken.routerToThirdPartyVolumeUSD = toToken.routerToThirdPartyVolumeUSD.plus(volumeUSD);
    }
    toToken.save();
}

export function updateHourData(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32
): void {
    let hourData = createHourData(event);

    if (swapType === WOOFI_SWAP_TYPE) {
        hourData.routerToWooPPTxns = hourData.routerToWooPPTxns.plus(BI_1);
        hourData.routerToWooPPVolumeUSD = hourData.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        hourData.routerToThirdPartyTxns = hourData.routerToThirdPartyTxns.plus(BI_1);
        hourData.routerToThirdPartyVolumeUSD = hourData.routerToThirdPartyVolumeUSD.plus(volumeUSD);
    }

    hourData.save();
}

export function updateDayData(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32
): void {
    let dayData = createDayData(event);

    if (swapType === WOOFI_SWAP_TYPE) {
        dayData.routerToWooPPTxns = dayData.routerToWooPPTxns.plus(BI_1);
        dayData.routerToWooPPVolumeUSD = dayData.routerToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        dayData.routerToThirdPartyTxns = dayData.routerToThirdPartyTxns.plus(BI_1);
        dayData.routerToThirdPartyVolumeUSD = dayData.routerToThirdPartyVolumeUSD.plus(volumeUSD);
    }

    dayData.save();
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
