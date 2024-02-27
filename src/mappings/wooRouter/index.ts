import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { WooRouterSwap as WooRouterV1WooRouterSwap_1 } from "../../../generated/WooRouterV1_1/WooRouterV1";
import { WooRouterSwap as WooRouterV1WooRouterSwap_2 } from "../../../generated/WooRouterV1_2/WooRouterV1";
import { WooRouterSwap as WooRouterV1WooRouterSwap_3 } from "../../../generated/WooRouterV1_3/WooRouterV1";
import { WooRouterSwap as WooRouterV2WooRouterSwap_1 } from "../../../generated/WooRouterV2_1/WooRouterV2";
import { WooRouterSwap as WooRouterV2WooRouterSwap_2 } from "../../../generated/WooRouterV2_2/WooRouterV2";
import { WooRouterSwap as WooRouterV2WooRouterSwap_3 } from "../../../generated/WooRouterV2_3/WooRouterV2";

import { calVolumeUSDForWooRouter } from "../../helpers";
import {
    updateGlobalVariable,
    updateHourToken,
    updateToken,
    updateHourData,
    updateDayData,
    updateOrderHistoryVariable,
    updateWooRouterSwapHash,
} from "./update";
import { createWooSwapHash, createWooRouterSwapHash, createOrderHistory } from "../../create";

export function handleWooRouterV2WooRouterSwap_3(event: WooRouterV2WooRouterSwap_3): void {
    handleWooRouterSwap(
        event, event.params.swapType, event.params.from, event.params.to,
        event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, false
    );
}

export function handleWooRouterV2WooRouterSwap_2(event: WooRouterV2WooRouterSwap_2): void {
    handleWooRouterSwap(
        event, event.params.swapType, event.params.from, event.params.to,
        event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, false
    );
}

export function handleWooRouterV2WooRouterSwap_1(event: WooRouterV2WooRouterSwap_1): void {
    handleWooRouterSwap(
        event, event.params.swapType, event.params.from, event.params.to,
        event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, false
    );
}

export function handleWooRouterV1WooRouterSwap_3(event: WooRouterV1WooRouterSwap_3): void {
    handleWooRouterSwap(
        event,
        event.params.swapType,
        event.params.from,
        event.params.to,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.toToken,
        event.params.toAmount,
        true
    );
}

export function handleWooRouterV1WooRouterSwap_2(event: WooRouterV1WooRouterSwap_2): void {
    handleWooRouterSwap(
        event,
        event.params.swapType,
        event.params.from,
        event.params.to,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.toToken,
        event.params.toAmount,
        true
    )
}

export function handleWooRouterV1WooRouterSwap_1(event: WooRouterV1WooRouterSwap_1): void {
    handleWooRouterSwap(
        event,
        event.params.swapType,
        event.params.from,
        event.params.to,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.toToken,
        event.params.toAmount,
        true
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
    toAmount: BigInt,
    isV1: boolean
): void {
    let volumeUSD = calVolumeUSDForWooRouter(
        event,
        swapType,
        fromTokenAddress,
        fromAmount,
        toTokenAddress,
        toAmount,
        isV1
    );

    // Transaction may exist two WooRouterSwap
    let wooSwapHash = createWooSwapHash(event);
    // let wooRouterSwapHash = createWooRouterSwapHash(event);
    // let addOrderSourceVolumeUSD = wooSwapHash.volumeUSD.minus(wooRouterSwapHash.previousVolumeUSD);

    updateHourStatistics(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
    updateDayStatistics(event, volumeUSD, swapType);
    updateStatistic(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);

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
    );
}

function updateHourStatistics(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes
): void {
    updateHourData(event, volumeUSD, swapType);
    updateHourToken(event, volumeUSD, swapType, fromTokenAddress, toTokenAddress);
}

function updateDayStatistics(
    event: ethereum.Event,
    volumeUSD: BigInt,
    swapType: i32
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
