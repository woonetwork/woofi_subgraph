import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { WooSwapHash } from "../../../generated/schema";
import { WooSwap as WooPPV1WooSwap_0 } from "../../../generated/WooPPV1_0/WooPPV1";
import { WooSwap as WooPPV1WooSwap_1 } from "../../../generated/WooPPV1_1/WooPPV1";
import { WooSwap as WooPPV1WooSwap_2 } from "../../../generated/WooPPV1_2/WooPPV1";
import { WooSwap as WooPPV2WooSwap_1 } from "../../../generated/WooPPV2_1/WooPPV2";
import { WooSwap as WooPPV2WooSwap_2 } from "../../../generated/WooPPV2_2/WooPPV2";

import { calVolumeUSDForWooPP } from "../../helpers";
import {
    updateGlobalVariable,
    updateHourToken,
    updateToken,
    updateHourData,
    updateDayData,
    updateHourOrderSource,
    updateDayOrderSource,
    updateOrderSource,
    updateWooSwapHash,
    updateHourRebate,
} from "./update";
import { createToken, createWooSwapHash } from "../../create";
import { updateTokenPrice } from "../../update";
import { BI_0, BI_18, WOO_PP_QUOTE_TOKENS } from "../../constants";
import { exponentToBigInt } from "../../utils";

export function handleWooPPV2WooSwap_2(event: WooPPV2WooSwap_2): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.swapVol, event.params.swapFee, false
    );
    handleWooPPV2WooSwapRebateTo(event, event.params.swapFee, event.params.rebateTo);
}

export function handleWooPPV2WooSwap_1(event: WooPPV2WooSwap_1): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.swapVol, event.params.swapFee, false
    );
    handleWooPPV2WooSwapRebateTo(event, event.params.swapFee, event.params.rebateTo);
}

function handleWooPPV2WooSwapRebateTo(
    event: ethereum.Event,
    swapFee: BigInt,
    rebateToAddress: Bytes
): void {
    // WooPPV2 collect rebate fee off-chain, therefore it will be calculated in SubGraph
    let rebateFee = swapFee.times(BigInt.fromI32(20)).div(BigInt.fromI32(100));
    updateHourRebate(event, swapFee, rebateFee, rebateToAddress);
}

export function handleWooPPV1WooSwap_2(event: WooPPV1WooSwap_2): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from, BI_0, BI_0, true
    );
}

export function handleWooPPV1WooSwap_1(event: WooPPV1WooSwap_1): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from, BI_0, BI_0, true
    );
}

export function handleWooPPV1WooSwap_0(event: WooPPV1WooSwap_0): void {
    // only for WooRouterV1 swap history at the beginning
    updateTokenPrice(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount
    );
}

function handleWooSwap(
    event: ethereum.Event,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt,
    wooSwapFrom: Bytes,
    swapVol: BigInt,
    swapFee: BigInt,
    isV1: boolean
): void {
    // start to data statistic, always update token price first
    let volumeUSD: BigInt;
    let wooPPAddressString = event.address.toHexString();
    let quoteTokenAddress = Bytes.fromHexString(WOO_PP_QUOTE_TOKENS.get(wooPPAddressString) as string) as Bytes;
    if (isV1 == false) {
        // WooPPV2 is able to swap Base to Base
        let quoteToken = createToken(event, quoteTokenAddress);
        if (fromTokenAddress != quoteTokenAddress && toTokenAddress != quoteTokenAddress) {
            updateTokenPrice(event, fromTokenAddress, fromAmount, quoteTokenAddress, swapVol.minus(swapFee));
            updateTokenPrice(event, quoteTokenAddress, swapVol, toTokenAddress, toAmount);
        } else {
            updateTokenPrice(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
        }
        volumeUSD = swapVol.times(exponentToBigInt(BI_18)).div(exponentToBigInt(quoteToken.decimals));;
    } else {
        // WooPPV1 is not able to swap Base to Base
        updateTokenPrice(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
        volumeUSD = calVolumeUSDForWooPP(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
    }

    // tx.origin
    let traderAddress = event.transaction.from;
    // it's possible to exist two or more WooSwap events in one tx, will be checked when entity has txCount
    let wooSwapHash = createWooSwapHash(event);

    updateHourStatistics(event, traderAddress, volumeUSD, fromTokenAddress, fromAmount, toTokenAddress, toAmount, wooSwapFrom, wooSwapHash);
    updateDayStatistics(event, traderAddress, volumeUSD, fromTokenAddress, toTokenAddress, wooSwapFrom, wooSwapHash);
    updateStatistics(event, traderAddress, volumeUSD, fromTokenAddress, toTokenAddress, wooSwapFrom, wooSwapHash);

    updateWooSwapHash(event, volumeUSD, wooSwapFrom);
}

function updateHourStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt,
    wooSwapFrom: Bytes,
    wooSwapHash: WooSwapHash
): void {
    updateHourData(event, traderAddress, volumeUSD, wooSwapFrom, wooSwapHash);
    updateHourToken(event, volumeUSD, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
    updateHourOrderSource(event, volumeUSD, wooSwapFrom, wooSwapHash);
}

function updateDayStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    wooSwapFrom: Bytes,
    wooSwapHash: WooSwapHash
): void {
    updateDayData(event, traderAddress, volumeUSD, wooSwapFrom, wooSwapHash);
    updateDayOrderSource(event, volumeUSD, wooSwapFrom, wooSwapHash);
}

function updateStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    wooSwapFrom: Bytes,
    wooSwapHash: WooSwapHash
): void {
    updateGlobalVariable(event, traderAddress, volumeUSD, wooSwapFrom, wooSwapHash);
    updateToken(event, volumeUSD, fromTokenAddress, toTokenAddress, wooSwapFrom);
    updateOrderSource(event, volumeUSD, wooSwapFrom, wooSwapHash);
}
