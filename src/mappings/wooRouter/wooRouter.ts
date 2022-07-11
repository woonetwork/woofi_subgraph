import {BigInt, Bytes, ethereum} from "@graphprotocol/graph-ts/index";
import {WooRouterSwap as WooRouterSwapV1} from "../../../generated/WooRouterV1/WooRouter"
import {WooRouterSwap as WooRouterSwapV2} from "../../../generated/WooRouterV2/WooRouter"
import {WooRouterSwap as WooRouterSwapV3} from "../../../generated/WooRouterV3/WooRouter"

import {calVolumeUSDForWooRouter} from "../../helpers";
import {
    updateGlobalVariable,
    updateHourData,
    updateHourToken,
    updateHourOrderSource,
    updateDayData,
    updateDayOrderSource,
    updateToken,
    updateOrderSource,
    updateOrderHistoryVariable,
    updateWooRouterSwapHash,
} from "../../updateForWooRouter";
import {createOrderHistory, createWooSwapHash, createWooRouterSwapHash} from "../../create";
import {WooSwapHash} from "../../../generated/schema";

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

    // Transaction may exist two WooRouterSwap
    let wooSwapHash = createWooSwapHash(event);
    let wooRouterSwapHash = createWooRouterSwapHash(event);
    let addOrderSourceVolumeUSD = wooSwapHash.volumeUSD.minus(wooRouterSwapHash.previousVolumeUSD);

    updateHourStatistics(event, volumeUSD, swapType, fromAddress, fromTokenAddress, toTokenAddress, addOrderSourceVolumeUSD, wooSwapHash);
    updateDayStatistics(event, volumeUSD, swapType, fromAddress, fromTokenAddress, toTokenAddress, addOrderSourceVolumeUSD, wooSwapHash);
    updateStatistic(event, volumeUSD, swapType, fromAddress, fromTokenAddress, toTokenAddress, addOrderSourceVolumeUSD, wooSwapHash);

    updateWooRouterSwapHash(event, wooSwapHash.volumeUSD);

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
    fromAddress: Bytes,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
): void {
    updateHourData(event, volumeUSD, swapType, fromAddress, addOrderSourceVolumeUSD, wooSwapHash);
    updateHourToken(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
    updateHourOrderSource(event, fromAddress, addOrderSourceVolumeUSD, wooSwapHash);
}

function updateDayStatistics(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromAddress: Bytes,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
): void {
    updateDayData(event, volumeUSD, swapType, fromAddress, addOrderSourceVolumeUSD, wooSwapHash);
    updateDayOrderSource(event, fromAddress, addOrderSourceVolumeUSD, wooSwapHash);
}

function updateStatistic(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromAddress: Bytes,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    addOrderSourceVolumeUSD: BigInt,
    wooSwapHash: WooSwapHash
): void {
    updateGlobalVariable(event, volumeUSD, swapType, fromAddress, addOrderSourceVolumeUSD, wooSwapHash);
    updateToken(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
    updateOrderSource(event, fromAddress, addOrderSourceVolumeUSD, wooSwapHash);
    updateOrderHistoryVariable(event);
}
