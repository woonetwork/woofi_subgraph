import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import { WooSwapHash } from "../../../generated/schema";
import { WooSwap as WooPPV1WooSwap_0 } from "../../../generated/WooPPV1_0/WooPPV1";
import { WooSwap as WooPPV1WooSwap_1 } from "../../../generated/WooPPV1_1/WooPPV1";
import { WooSwap as WooPPV1WooSwap_2 } from "../../../generated/WooPPV1_2/WooPPV1";
import { WooSwap as WooPPV1WooSwap_3 } from "../../../generated/WooPPV1_3/WooPPV1";

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
import { BI_18, WOO_PP_QUOTE_TOKENS } from "../../constants";
import { exponentToBigInt } from "../../utils";

export function handleWooPPV2WooSwap_2(event: WooPPV2WooSwap_2): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.to, event.params.rebateTo, event.params.swapVol, event.params.swapFee
    );
    handleWooPPV2WooSwapRebateTo(event, event.params.swapFee, event.params.rebateTo);
}

export function handleWooPPV2WooSwap_1(event: WooPPV2WooSwap_1): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.to, event.params.rebateTo, event.params.swapVol, event.params.swapFee
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

export function handleWooPPV1WooSwap_3(event: WooPPV1WooSwap_3): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.to, event.params.rebateTo, null, null
    );
}

export function handleWooPPV1WooSwap_2(event: WooPPV1WooSwap_2): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.to, event.params.rebateTo, null, null
    );
}

export function handleWooPPV1WooSwap_1(event: WooPPV1WooSwap_1): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.to, null, null, null
    );
}

export function handleWooPPV1WooSwap_0(event: WooPPV1WooSwap_0): void {
    handleWooSwap(
        event, event.params.fromToken, event.params.fromAmount,
        event.params.toToken, event.params.toAmount, event.params.from,
        event.params.to, null, null, null
    );
}

function handleWooSwap(
    event: ethereum.Event,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt,
    from: Bytes,
    to: Bytes,
    rebateTo: Bytes | null,
    swapVol: BigInt | null,
    swapFee: BigInt | null
): void {
    // always update token price first
    let volumeUSD: BigInt;
    let wooPPAddressString = event.address.toHexString();
    let quoteTokenAddress = Bytes.fromHexString(WOO_PP_QUOTE_TOKENS.get(wooPPAddressString) as string) as Bytes;
    if (swapVol !== null && swapFee !== null) {
        // WooPPV2 is able to swap Base to Base
        let quoteToken = createToken(event, quoteTokenAddress);
        if (fromTokenAddress != quoteTokenAddress && toTokenAddress != quoteTokenAddress) {
            updateTokenPrice(event, fromTokenAddress, fromAmount, quoteTokenAddress, swapVol.minus(swapFee));
            updateTokenPrice(event, quoteTokenAddress, swapVol, toTokenAddress, toAmount);
        } else {
            updateTokenPrice(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
        }
        volumeUSD = swapVol.times(exponentToBigInt(BI_18)).div(exponentToBigInt(quoteToken.decimals));
    } else {
        // WooPPV1 is not able to swap Base to Base
        updateTokenPrice(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
        volumeUSD = calVolumeUSDForWooPP(event, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
    }

    // tx.origin
    let traderAddress = event.transaction.from;
    // it's possible to exist two or more WooSwap events in one tx, will be checked when entity has txCount
    let wooSwapHash = createWooSwapHash(event);

    updateHourStatistics(event, traderAddress, volumeUSD, fromTokenAddress, fromAmount, toTokenAddress, toAmount, from, rebateTo, wooSwapHash);
    updateDayStatistics(event, traderAddress, volumeUSD, from, rebateTo, wooSwapHash);
    updateStatistics(event, traderAddress, volumeUSD, fromTokenAddress, toTokenAddress, from, rebateTo, wooSwapHash);

    updateWooSwapHash(event, volumeUSD, from, rebateTo);
}

function updateHourStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    toTokenAddress: Bytes,
    toAmount: BigInt,
    from: Bytes,
    rebateTo: Bytes | null,
    wooSwapHash: WooSwapHash
): void {
    updateHourData(event, traderAddress, volumeUSD, wooSwapHash);
    updateHourToken(event, volumeUSD, fromTokenAddress, fromAmount, toTokenAddress, toAmount);
    updateHourOrderSource(event, volumeUSD, from, rebateTo, wooSwapHash);
}

function updateDayStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    from: Bytes,
    rebateTo: Bytes | null,
    wooSwapHash: WooSwapHash
): void {
    updateDayData(event, traderAddress, volumeUSD, from, rebateTo, wooSwapHash);
    updateDayOrderSource(event, volumeUSD, from, rebateTo, wooSwapHash);
}

function updateStatistics(
    event: ethereum.Event,
    traderAddress: Bytes,
    volumeUSD: BigInt,
    fromTokenAddress: Bytes,
    toTokenAddress: Bytes,
    from: Bytes,
    rebateTo: Bytes | null,
    wooSwapHash: WooSwapHash
): void {
    updateGlobalVariable(event, traderAddress, volumeUSD, wooSwapHash);
    updateToken(event, volumeUSD, fromTokenAddress, toTokenAddress);
    updateOrderSource(event, volumeUSD, from, rebateTo, wooSwapHash);
}
