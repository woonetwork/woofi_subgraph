import { ethereum, Address, Bytes, BigInt } from "@graphprotocol/graph-ts";
import { exponentToBigInt } from "./utils";
import { createToken } from "./create";
import {
    BI_0,
    BI_2,
    ETHER,
    WRAPPED,
    STABLE_TOKENS,
} from "./constants";

export function updateNativeTokenPrice(event: ethereum.Event, lastTradePrice: BigInt): void {
    let nativeToken = createToken(event, Address.fromString(ETHER));
    nativeToken.lastTradePrice = lastTradePrice;
    nativeToken.updatedAt = event.block.timestamp;
    nativeToken.save();
}

export function updateTokenPrice(event: ethereum.Event, fromTokenAddress: Bytes, fromAmount: BigInt, toTokenAddress: Bytes, toAmount: BigInt): void {
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    let lastTradePrice: BigInt;
    if (STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) != -1) {  // fromToken is Stable Coin
        if (toAmount == BI_0) {
            return;
        }

        lastTradePrice = fromAmount.times(exponentToBigInt(toToken.decimals.times(BI_2)))
          .div(exponentToBigInt(fromToken.decimals)).div(toAmount);
        toToken.lastTradePrice = lastTradePrice;
        toToken.updatedAt = event.block.timestamp;
        toToken.save();

        if (toTokenAddress.toHexString() === WRAPPED) {
            updateNativeTokenPrice(event, lastTradePrice);
        }
    } else if (STABLE_TOKENS.indexOf(toTokenAddress.toHexString()) != -1) {  // toToken is Stable Coin
        if (fromAmount == BI_0) {
            return;
        }

        lastTradePrice = toAmount.times(exponentToBigInt(fromToken.decimals.times(BI_2)))
          .div(exponentToBigInt(toToken.decimals)).div(fromAmount);
        fromToken.lastTradePrice = lastTradePrice;
        fromToken.updatedAt = event.block.timestamp;
        fromToken.save();

        if (fromTokenAddress.toHexString() === WRAPPED) {
            updateNativeTokenPrice(event, lastTradePrice);
        }
    }
}
