import {Address, Bytes, BigInt, ethereum} from "@graphprotocol/graph-ts/index";
import {exponentToBigInt} from "./utils";
import {
    createToken,
    createStargateBridgeSendMsg,
} from "./create";
import {
    BI_0,
    BI_2,
    ETHER,
    WRAPPED,
    STABLE_TOKENS,
} from "./constants";

export function updateTokenPrice(event: ethereum.Event, fromTokenAddress: Bytes, fromAmount: BigInt, toTokenAddress: Bytes, toAmount: BigInt): void {
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    let isUpdateNativeTokenPrice = false;
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

        if (toTokenAddress.toHexString() == WRAPPED) {
            isUpdateNativeTokenPrice = true;
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

        if (fromTokenAddress.toHexString() == WRAPPED) {
            isUpdateNativeTokenPrice = true;
        }
    }

    if (isUpdateNativeTokenPrice == true) {
        let nativeToken = createToken(event, Address.fromString(ETHER));
        nativeToken.lastTradePrice = lastTradePrice;
        nativeToken.updatedAt = event.block.timestamp;
        nativeToken.save();
    }
}

export function updateStargateBridgeSendMsg(event: ethereum.Event, msgType: i32, nonce: BigInt): void {
    let stargateBridgeSendMsg = createStargateBridgeSendMsg(event);
    stargateBridgeSendMsg.msgType = msgType;
    stargateBridgeSendMsg.nonce = nonce;
    stargateBridgeSendMsg.updatedAt = event.block.timestamp;

    stargateBridgeSendMsg.save();
}
