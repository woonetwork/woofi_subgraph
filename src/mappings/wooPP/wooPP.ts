import {BigInt, Bytes} from "@graphprotocol/graph-ts/index";
import {WooSwapHash} from "../../../generated/schema";
import {WooSwap as WooSwap2021Oct22} from "../../../generated/WooPP2021Oct22/WooPP"
import {WooSwap as WooSwap2021Oct26} from "../../../generated/WooPP2021Oct26/WooPP"
import {WooSwap as WooSwap2021Dec21} from "../../../generated/WooPP2021Dec21/WooPP"

import {updateTokenPrice, calVolumeUSDForWooPP} from '../../helpers'
import {
    updateGlobalVariable,
    updateHourToken,
    updateToken,
    updateHourData,
    updateDayData,
    updateHourOrderSource,
    updateDayOrderSource,
    updateOrderSource,
    updateWooSwapHash
} from "../../updateForWooPP";
import {createWooSwapHash} from "../../create";
import {ethereum} from "@graphprotocol/graph-ts";

export function handleWooSwap2021Dec21(event: WooSwap2021Dec21): void {
    handleWooSwap(event, event.params.fromToken, event.params.fromAmount, event.params.toToken, event.params.toAmount);
}

export function handleWooSwap2021Oct26(event: WooSwap2021Oct26): void {
    handleWooSwap(event, event.params.fromToken, event.params.fromAmount, event.params.toToken, event.params.toAmount);
}

export function handleWooSwap2021Oct22(event: WooSwap2021Oct22): void {
    // TODO write same logic as handleWooSwap2021Oct26
    // only for WooRouter history swap in the beginning
    let fromTokenAddress = event.params.fromToken;
    let fromAmount = event.params.fromAmount;
    let toTokenAddress = event.params.toToken;
    let toAmount = event.params.toAmount;
    updateTokenPrice(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
}

function handleWooSwap(
    event: ethereum.Event,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt
): void {
    // update token price always been first
    updateTokenPrice(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);

    // start to data statistic
    let traderAddress = event.transaction.from;  // tx.origin, very important here
    let volumeUSD = calVolumeUSDForWooPP(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
    // it's possible to has two WooSwap events in one tx, will be checked when entity has txCount
    let wooSwapHash = createWooSwapHash(event);

    updateHourStatistics(event, traderAddress, volumeUSD, fromTokenAddress, toTokenAddress, wooSwapHash);
    updateDayStatistics(event, traderAddress, volumeUSD, fromTokenAddress, toTokenAddress, wooSwapHash);
    updateStatistics(event, traderAddress, volumeUSD, fromTokenAddress, toTokenAddress, wooSwapHash);

    // after updated all entities, WooSwapHash.txSynced should be true if false before
    if (wooSwapHash.txSynced == false) {
        updateWooSwapHash(event);
    }
}

function updateHourStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    wooSwapHash: WooSwapHash
): void {
    updateHourData(event, traderAddress, volumeUSD, wooSwapHash);
    updateHourToken(event, volumeUSD, fromTokenAddress, toTokenAddress);
    updateHourOrderSource(event, volumeUSD, wooSwapHash);
}

function updateDayStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    wooSwapHash: WooSwapHash
): void {
    updateDayData(event, traderAddress, volumeUSD, wooSwapHash);
    updateDayOrderSource(event, volumeUSD, wooSwapHash);
}

function updateStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    wooSwapHash: WooSwapHash
): void {
    updateGlobalVariable(event, traderAddress, volumeUSD, wooSwapHash);
    updateToken(event, volumeUSD, fromTokenAddress, toTokenAddress);
    updateOrderSource(event, volumeUSD, wooSwapHash);
}
