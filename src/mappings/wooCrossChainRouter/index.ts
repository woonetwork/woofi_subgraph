import { ethereum, BigInt, Bytes } from "@graphprotocol/graph-ts";
import {
    WooCrossSwapOnSrcChain as WooCCRouterV1WooCrossSwapOnSrcChain_1,
    WooCrossSwapOnDstChain as WooCCRouterV1WooCrossSwapOnDstChain_1,
} from "../../../generated/WooCrossChainRouterV1_1/WooCrossChainRouterV1";
import {
    WooCrossSwapOnSrcChain as WooCCRouterV1WooCrossSwapOnSrcChain_2,
    WooCrossSwapOnDstChain as WooCCRouterV1WooCrossSwapOnDstChain_2,
} from "../../../generated/WooCrossChainRouterV1_2/WooCrossChainRouterV1";
import {
    WooCrossSwapOnSrcChain as WooCCRouterV2WooCrossSwapOnSrcChain_1,
    WooCrossSwapOnDstChain as WooCCRouterV2WooCrossSwapOnDstChain_1,
} from "../../../generated/WooCrossChainRouterV2_1/WooCrossChainRouterV2";
import {
    createDayData,
    createDayTrader,
    createWooSwapHash,
    createCrossChainSrcOrderHistory,
    createCrossChainDstOrderHistory,
} from "../../create";
import {
    updateCrossChainSrcOrderHistoryVariable,
    updateCrossChainDstOrderHistoryVariable,
} from "./update";
import { updateDayTrader } from "../wooPP/update";
import { BI_1 } from "../../constants";

export function handleWooCCRouterV2WooCrossSwapOnSrcChain_1(event: WooCCRouterV2WooCrossSwapOnSrcChain_1): void {
    handleWooCrossSwapOnSrcChain(
        event,
        event.params.refId,
        event.params.sender,
        event.params.to,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.minBridgeAmount,
        event.params.realBridgeAmount
    );
}

export function handleWooCCRouterV2WooCrossSwapOnDstChain_1(event: WooCCRouterV2WooCrossSwapOnDstChain_1): void {
    handleWooCrossSwapOnDstChain(
        event,
        event.params.refId,
        event.params.sender,
        event.params.to,
        event.params.bridgedToken,
        event.params.bridgedAmount,
        event.params.toToken,
        event.params.realToToken,
        event.params.minToAmount,
        event.params.realToAmount
    );
}

export function handleWooCCRouterV1WooCrossSwapOnSrcChain_2(event: WooCCRouterV1WooCrossSwapOnSrcChain_2): void {
    handleWooCrossSwapOnSrcChain(
        event,
        event.params.refId,
        event.params.sender,
        event.params.to,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.minQuoteAmount,
        event.params.realQuoteAmount
    );
}

export function handleWooCCRouterV1WooCrossSwapOnDstChain_2(event: WooCCRouterV1WooCrossSwapOnDstChain_2): void {
    handleWooCrossSwapOnDstChain(
        event,
        event.params.refId,
        event.params.sender,
        event.params.to,
        event.params.bridgedToken,
        event.params.bridgedAmount,
        event.params.toToken,
        event.params.realToToken,
        event.params.minToAmount,
        event.params.realToAmount
    );
}

export function handleWooCCRouterV1WooCrossSwapOnSrcChain_1(event: WooCCRouterV1WooCrossSwapOnSrcChain_1): void {
    handleWooCrossSwapOnSrcChain(
        event,
        event.params.refId,
        event.params.sender,
        event.params.to,
        event.params.fromToken,
        event.params.fromAmount,
        event.params.minQuoteAmount,
        event.params.realQuoteAmount
    );
}

export function handleWooCCRouterV1WooCrossSwapOnDstChain_1(event: WooCCRouterV1WooCrossSwapOnDstChain_1): void {
    handleWooCrossSwapOnDstChain(
        event,
        event.params.refId,
        event.params.sender,
        event.params.to,
        event.params.bridgedToken,
        event.params.bridgedAmount,
        event.params.toToken,
        event.params.realToToken,
        event.params.minToAmount,
        event.params.realToAmount
    );
}

export function handleWooCrossSwapOnSrcChain(
    event: ethereum.Event,
    refId: BigInt,
    sender: Bytes,
    toAddress: Bytes,
    fromTokenAddress: Bytes,
    fromAmount: BigInt,
    minQuoteAmount: BigInt,
    realQuoteAmount: BigInt
): void {
    updateCrossChainSrcOrderHistoryVariable(event);

    createCrossChainSrcOrderHistory(
          event,
          refId,
          sender,
          toAddress,
          fromTokenAddress,
          fromAmount,
          minQuoteAmount,
          realQuoteAmount
    );
}

export function handleWooCrossSwapOnDstChain(
    event: ethereum.Event,
    refId: BigInt,
    sender: Bytes,
    toAddress: Bytes,
    bridgedTokenAddress: Bytes,
    bridgedAmount: BigInt,
    toTokenAddress: Bytes,
    realToToken: Bytes,
    minToAmount: BigInt,
    realToAmount: BigInt
): void {
    updateCrossChainDstOrderHistoryVariable(event);

    let wooSwapHash = createWooSwapHash(event);
    let dayData = createDayData(event);
    let dayTrader = createDayTrader(event, toAddress);
    if (dayTrader.tradedToday === false) {
        dayData.traders = dayData.traders.plus(BI_1);
    }
    /**
     * on destination txn:
     * 1.traderAddress === toAddress
     * 2.wooSwapFrom === WooCrossChainRouter
     * 3.toAddress === rebateTo
     */
    updateDayTrader(event, toAddress, wooSwapHash.volumeUSD, event.address, toAddress);

    createCrossChainDstOrderHistory(
        event,
        refId,
        sender,
        toAddress,
        bridgedTokenAddress,
        bridgedAmount,
        toTokenAddress,
        realToToken,
        minToAmount,
        realToAmount
    );
}
