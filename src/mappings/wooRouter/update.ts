import {WooRouterSwap} from "../../../generated/WooRouter/WooRouter";
import {ONE_BI, ONE_INCH_ORDER_SOURCE_ID, WOO_ROUTER_ORDER_SOURCE_ID} from "../../constants";
import {createOrderHistory} from "./create";
import {BigInt} from "@graphprotocol/graph-ts";
import {getOrderSourceIDForWooRouter} from "../../utils";
import {
    createGlobalVariable,
    createOrderHistoryVariable,
    createHourToken,
    createToken,
    createHourData,
    createDayData,
    createHourOrderSource,
    createDayOrderSource,
    createOrderSource,
} from "../../genericCreate";

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
        fromHourToken.routeToWooPPTxCount = fromHourToken.routeToWooPPTxCount.plus(ONE_BI);
        fromHourToken.routeToWooPPVolumeUSD = fromHourToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        fromHourToken.routeToDODOTxCount = fromHourToken.routeToDODOTxCount.plus(ONE_BI);
        fromHourToken.routeToDODOVolumeUSD = fromHourToken.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    fromHourToken.save();

    if (event.params.swapType == 0) {
        toHourToken.routeToWooPPTxCount = toHourToken.routeToWooPPTxCount.plus(ONE_BI);
        toHourToken.routeToWooPPVolumeUSD = toHourToken.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        toHourToken.routeToDODOTxCount = toHourToken.routeToDODOTxCount.plus(ONE_BI);
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
        hourData.routeToWooPPTxCount = hourData.routeToWooPPTxCount.plus(ONE_BI);
        hourData.routeToWooPPVolumeUSD = hourData.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        hourData.routeToDODOTxCount = hourData.routeToDODOTxCount.plus(ONE_BI);
        hourData.routeToDODOVolumeUSD = hourData.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    hourData.save();
}

export function updateDayData(event: WooRouterSwap, volumeUSD: BigInt): void {
    let dayData = createDayData(event);

    if (event.params.swapType == 0) {
        dayData.routeToWooPPTxCount = dayData.routeToWooPPTxCount.plus(ONE_BI);
        dayData.routeToWooPPVolumeUSD = dayData.routeToWooPPVolumeUSD.plus(volumeUSD);
    } else {
        dayData.routeToDODOTxCount = dayData.routeToDODOTxCount.plus(ONE_BI);
        dayData.routeToDODOVolumeUSD = dayData.routeToDODOVolumeUSD.plus(volumeUSD);
    }
    dayData.save();
}

export function updateHourOrderSource(event: WooRouterSwap, volumeUSD: BigInt): void {
    let orderSourceID = getOrderSourceIDForWooRouter(event.params.from.toHexString());

    if (event.params.swapType == 0 && orderSourceID != WOO_ROUTER_ORDER_SOURCE_ID) {
        // only for 1inch update order source
        let hourOrderSource = createHourOrderSource(event, orderSourceID);
        hourOrderSource.volumeUSD = hourOrderSource.volumeUSD.plus(volumeUSD);
        hourOrderSource.txCount = hourOrderSource.txCount.plus(ONE_BI);
        hourOrderSource.updatedAt = event.block.timestamp;
        hourOrderSource.save();
        // duplicate statistic here, need to subtract
        let wooRouterHourOrderSource = createHourOrderSource(event, WOO_ROUTER_ORDER_SOURCE_ID);
        wooRouterHourOrderSource.volumeUSD = wooRouterHourOrderSource.volumeUSD.minus(volumeUSD);
        wooRouterHourOrderSource.txCount = wooRouterHourOrderSource.txCount.minus(ONE_BI);
        wooRouterHourOrderSource.updatedAt = event.block.timestamp;
        wooRouterHourOrderSource.save();
    }
}

export function updateDayOrderSource(event: WooRouterSwap, volumeUSD: BigInt): void {
    let orderSourceID = getOrderSourceIDForWooRouter(event.params.from.toHexString());

    if (event.params.swapType == 0 && orderSourceID != WOO_ROUTER_ORDER_SOURCE_ID) {
        // only for 1inch update order source
        let dayOrderSource = createDayOrderSource(event, orderSourceID);
        dayOrderSource.volumeUSD = dayOrderSource.volumeUSD.plus(volumeUSD);
        dayOrderSource.txCount = dayOrderSource.txCount.plus(ONE_BI);
        dayOrderSource.updatedAt = event.block.timestamp;
        dayOrderSource.save();
        // duplicate statistic here, need to subtract
        let wooRouterDayOrderSource = createDayOrderSource(event, WOO_ROUTER_ORDER_SOURCE_ID);
        wooRouterDayOrderSource.volumeUSD = wooRouterDayOrderSource.volumeUSD.minus(volumeUSD);
        wooRouterDayOrderSource.txCount = wooRouterDayOrderSource.txCount.minus(ONE_BI);
        wooRouterDayOrderSource.updatedAt = event.block.timestamp;
        wooRouterDayOrderSource.save();
    }
}

export function updateOrderSource(event: WooRouterSwap, volumeUSD: BigInt): void {
    let orderSourceID = getOrderSourceIDForWooRouter(event.params.from.toHexString());

    if (event.params.swapType == 0 && orderSourceID != WOO_ROUTER_ORDER_SOURCE_ID) {
        // only for 1inch update order source
        let orderSource = createOrderSource(event, orderSourceID);
        orderSource.volumeUSD = orderSource.volumeUSD.plus(volumeUSD);
        orderSource.txCount = orderSource.txCount.plus(ONE_BI);
        orderSource.updatedAt = event.block.timestamp;
        orderSource.save();
        // duplicate statistic here, need to subtract
        let wooRouterOrderSource = createOrderSource(event, WOO_ROUTER_ORDER_SOURCE_ID);
        wooRouterOrderSource.volumeUSD = wooRouterOrderSource.volumeUSD.minus(volumeUSD);
        wooRouterOrderSource.txCount = wooRouterOrderSource.txCount.minus(ONE_BI);
        wooRouterOrderSource.updatedAt = event.block.timestamp;
        wooRouterOrderSource.save();
    }
}

export function updateOrderHistoryVariable(event: WooRouterSwap): void {
    let orderHistoryVariable = createOrderHistoryVariable(event);

    orderHistoryVariable.txCount = orderHistoryVariable.txCount.plus(ONE_BI);
    orderHistoryVariable.updatedAt = event.block.timestamp;

    orderHistoryVariable.save();
}

export function updateOrderHistory(event: WooRouterSwap): void {
    createOrderHistory(event);
}
