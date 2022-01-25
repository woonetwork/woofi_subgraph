import {WooRouterSwap} from "../../../generated/WooRouter/WooRouter";
import {BI_1} from "../../constants";
import {createOrderHistory} from "./create";
import {BigInt} from "@graphprotocol/graph-ts";
import {
    createGlobalVariable,
    createOrderHistoryVariable,
    createHourToken,
    createToken,
    createHourData,
    createDayData,
} from "../../create";

export function updateGlobalVariable(event: WooRouterSwap, volumeUSD: BigInt): void {
    let globalVariable = createGlobalVariable(event);

    if (event.params.swapType == 0) {
        globalVariable.routeToWooPPVolumeUSD = globalVariable.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        globalVariable.routeToDODOVolumeUSD = globalVariable.routeToDODOVolumeUSD.plus(volumeUSD);
    }

    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();
}

export function updateHourToken(event: WooRouterSwap, volumeUSD: BigInt): void {
    let fromHourToken = createHourToken(event, event.params.fromToken);
    let toHourToken = createHourToken(event, event.params.toToken);

    if (event.params.swapType == 0) {
        fromHourToken.routeToWooPPTxCount = fromHourToken.routeToWooPPTxCount.plus(BI_1);
        fromHourToken.routeToWooPPVolumeUSD = fromHourToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromHourToken.routeToDODOTxCount = fromHourToken.routeToDODOTxCount.plus(BI_1);
        fromHourToken.routeToDODOVolumeUSD = fromHourToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    fromHourToken.save();

    if (event.params.swapType == 0) {
        toHourToken.routeToWooPPTxCount = toHourToken.routeToWooPPTxCount.plus(BI_1);
        toHourToken.routeToWooPPVolumeUSD = toHourToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toHourToken.routeToDODOTxCount = toHourToken.routeToDODOTxCount.plus(BI_1);
        toHourToken.routeToDODOVolumeUSD = toHourToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    toHourToken.save();
}

export function updateToken(event: WooRouterSwap, volumeUSD: BigInt): void {
    let fromToken = createToken(event, event.params.fromToken);
    let toToken = createToken(event, event.params.toToken);

    if (event.params.swapType == 0) {
        fromToken.routeToWooPPVolumeUSD = fromToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromToken.routeToDODOVolumeUSD = fromToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    fromToken.save();

    if (event.params.swapType == 0) {
        toToken.routeToWooPPVolumeUSD = toToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toToken.routeToDODOVolumeUSD = toToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    toToken.save();
}

export function updateHourData(event: WooRouterSwap, volumeUSD: BigInt): void {
    let hourData = createHourData(event);

    if (event.params.swapType == 0) {
        hourData.routeToWooPPTxCount = hourData.routeToWooPPTxCount.plus(BI_1);
        hourData.routeToWooPPVolumeUSD = hourData.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        hourData.routeToDODOTxCount = hourData.routeToDODOTxCount.plus(BI_1);
        hourData.routeToDODOVolumeUSD = hourData.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    hourData.save();
}

export function updateDayData(event: WooRouterSwap, volumeUSD: BigInt): void {
    let dayData = createDayData(event);

    if (event.params.swapType == 0) {
        dayData.routeToWooPPTxCount = dayData.routeToWooPPTxCount.plus(BI_1);
        dayData.routeToWooPPVolumeUSD = dayData.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        dayData.routeToDODOTxCount = dayData.routeToDODOTxCount.plus(BI_1);
        dayData.routeToDODOVolumeUSD = dayData.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    dayData.save();
}

export function updateOrderHistoryVariable(event: WooRouterSwap): void {
    let orderHistoryVariable = createOrderHistoryVariable(event);

    orderHistoryVariable.txCount = orderHistoryVariable.txCount.plus(BI_1);
    orderHistoryVariable.updatedAt = event.block.timestamp;

    orderHistoryVariable.save();
}

export function updateOrderHistory(event: WooRouterSwap): void {
    createOrderHistory(event);
}
