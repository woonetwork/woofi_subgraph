import {BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {WooRouterSwap} from "../../../generated/WooRouter/WooRouter"
import {WooRouterSwap as WooRouterSwapV2} from "../../../generated/WooRouterV2/WooRouter"

import {calVolumeUSDForWooRouter} from "../../helpers";
import {
    updateDayData,
    updateGlobalVariable,
    updateHourData,
    updateHourToken,
    updateOrderHistoryVariable,
    updateToken,
} from "../../updateForWooRouter";
import {createOrderHistory} from "../../create";

export function handleWooRouterSwapV2(event: WooRouterSwapV2): void {
    let volumeUSD = calVolumeUSDForWooRouter(
        event,
        event.params.swapType,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.toToken,
        event.params.toAmount
    );

    updateHourStatistics(event, volumeUSD, event.params.swapType, event.params.fromToken, event.params.toToken);
    updateDayStatistics(event, volumeUSD, event.params.swapType, event.params.fromToken, event.params.toToken);
    updateStatistic(event, volumeUSD, event.params.swapType, event.params.fromToken, event.params.toToken);

    createOrderHistory(
      event,
      event.params.swapType,
      event.params.from,
      event.params.to,
      event.params.fromToken,
      event.params.fromAmount,
      event.params.toToken,
      event.params.toAmount
    )
}

export function handleWooRouterSwap(event: WooRouterSwap): void {
    let volumeUSD = calVolumeUSDForWooRouter(
        event,
        event.params.swapType,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.toToken,
        event.params.toAmount
    );

    updateHourStatistics(event, volumeUSD, event.params.swapType, event.params.fromToken, event.params.toToken);
    updateDayStatistics(event, volumeUSD, event.params.swapType, event.params.fromToken, event.params.toToken);
    updateStatistic(event, volumeUSD, event.params.swapType, event.params.fromToken, event.params.toToken);

    createOrderHistory(
      event,
      event.params.swapType,
      event.params.from,
      event.params.to,
      event.params.fromToken,
      event.params.fromAmount,
      event.params.toToken,
      event.params.toAmount
    )
}

function updateHourStatistics(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes
): void {
    updateHourToken(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
    updateHourData(event, volumeUSD, swapType);
}

function updateDayStatistics(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes
): void {
    updateDayData(event, volumeUSD, swapType);
}

function updateStatistic(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes
): void {
    updateGlobalVariable(event, volumeUSD, swapType);
    updateToken(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
    updateOrderHistoryVariable(event);
}
