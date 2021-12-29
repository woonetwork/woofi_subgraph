import {BigInt, Bytes} from "@graphprotocol/graph-ts/index";
import {WooSwapHash} from "../../../generated/schema";
import {WooSwap} from "../../../generated/WooPPDec21/WooPP"

import {calVolumeUSD, updateTokenPrice} from './helpers'
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
} from "./update";
import {createWooSwapHash} from "../../genericCreate";

export function handleWooSwap(event: WooSwap): void {
    // update token price always been first
    let fromTokenAddress = event.params.fromToken;
    let fromAmount = event.params.fromAmount;
    let toTokenAddress = event.params.toToken;
    let toAmount = event.params.toAmount;
    updateTokenPrice(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);

    // start to data statistic
    let traderAddress = event.transaction.from;  // tx.origin, very important here
    let volumeUSD = calVolumeUSD(event);
    // it's possible to has two WooSwap events in one tx, will be checked when entity has txCount
    let wooSwapHash = createWooSwapHash(event);

    updateHourStatistics(event, traderAddress, volumeUSD, wooSwapHash);
    updateDayStatistics(event, traderAddress, volumeUSD, wooSwapHash);
    updateStatistics(event, traderAddress, volumeUSD, wooSwapHash);

    // after updated all entities, WooSwapHash.txSynced should be true if false before
    if (wooSwapHash.txSynced == false) {
        updateWooSwapHash(event);
    }
}

function updateHourStatistics(event: WooSwap, traderAddress: Bytes, volumeUSD: BigInt, wooSwapHash: WooSwapHash): void {
    updateHourToken(event, volumeUSD);
    updateHourData(event, traderAddress, volumeUSD, wooSwapHash);
    updateHourOrderSource(event, volumeUSD, wooSwapHash);
}

function updateDayStatistics(event: WooSwap, traderAddress: Bytes, volumeUSD: BigInt, wooSwapHash: WooSwapHash): void {
    updateDayData(event, traderAddress, volumeUSD, wooSwapHash);
    updateDayOrderSource(event, volumeUSD, wooSwapHash);
}

function updateStatistics(event: WooSwap, traderAddress: Bytes, volumeUSD: BigInt, wooSwapHash: WooSwapHash): void {
    updateGlobalVariable(event, traderAddress, volumeUSD, wooSwapHash);
    updateToken(event, volumeUSD);
    updateOrderSource(event, volumeUSD, wooSwapHash);
}
