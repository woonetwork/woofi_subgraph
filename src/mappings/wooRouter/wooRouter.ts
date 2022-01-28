import {WooRouterSwap} from "../../../generated/WooRouter/WooRouter"

import {
    updateDayData,
    updateGlobalVariable,
    updateHourData,
    updateHourToken,
    updateOrderHistoryVariable,
    updateOrderHistory,
    updateToken,
} from "./update";
import {calVolumeUSD} from "./helpers";
import {BigInt} from "@graphprotocol/graph-ts/index";

export function handleWooRouterSwap(event: WooRouterSwap): void {
    let volumeUSD = calVolumeUSD(event);

    updateHourStatistics(event, volumeUSD);
    updateDayStatistics(event, volumeUSD);
    updateStatistic(event, volumeUSD);
}

function updateHourStatistics(event: WooRouterSwap, volumeUSD: BigInt): void {
    updateHourToken(event, volumeUSD);
    updateHourData(event, volumeUSD);
}

function updateDayStatistics(event: WooRouterSwap, volumeUSD: BigInt): void {
    updateDayData(event, volumeUSD);
}

function updateStatistic(event: WooRouterSwap, volumeUSD: BigInt): void {
    updateGlobalVariable(event, volumeUSD);
    updateToken(event, volumeUSD);
    updateOrderHistoryVariable(event);
    updateOrderHistory(event);
}