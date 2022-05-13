import {BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {WooRouterSwap as WooRouterSwapV1} from "../../../generated/WooRouterV1/WooRouter"
import {WooRouterSwap as WooRouterSwapV2} from "../../../generated/WooRouterV2/WooRouter"
import {WooRouterSwap as WooRouterSwapV3} from "../../../generated/WooRouterV3/WooRouter"

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

export function handleWooRouterSwapV3(event: WooRouterSwapV3): void {
    handleWooRouterSwap(
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

export function handleWooRouterSwapV2(event: WooRouterSwapV2): void {
    handleWooRouterSwap(
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

export function handleWooRouterSwapV1(event: WooRouterSwapV1): void {
    handleWooRouterSwap(
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

export function handleWooRouterSwap(
    event: ethereum.Event,
    swapType: i32,
    fromAddress: Bytes,
    toAddress: Bytes,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt
): void {
    let volumeUSD = calVolumeUSDForWooRouter(
        event,
        swapType,
        fromTokenAddress,
        fromAmount,
        toTokenAddress,
        toAmount
    );

    updateHourStatistics(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
    updateDayStatistics(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
    updateStatistic(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);

    createOrderHistory(
      event,
      swapType,
      fromAddress,
      toAddress,
      fromTokenAddress,
      fromAmount,
      toTokenAddress,
      toAmount
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
