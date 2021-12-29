import {BigInt, Address, Bytes, ethereum} from "@graphprotocol/graph-ts"
import {WooSwap} from "../../../generated/WooPP/WooPP";
import {exponentToBigInt} from "../../utils";
import {
    BI_18,
    BNB,
    WBNB,
    BSC_STABLE_TOKENS
} from "../../constants";
import {createToken} from "../../genericCreate";

export function updateTokenPrice(event: ethereum.Event, fromTokenAddress: Bytes, fromAmount: BigInt, toTokenAddress: Bytes, toAmount: BigInt): void {
    if (fromTokenAddress.toHexString() == WBNB) {
        fromTokenAddress = Address.fromString(BNB);
    }
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    let BI_1e18 = exponentToBigInt(BI_18);
    if (BSC_STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) != -1) {  // fromToken is Stable Coin
        toToken.lastTradePrice = fromAmount.times(BI_1e18).div(toAmount);
        toToken.save();
    } else if (BSC_STABLE_TOKENS.indexOf(toTokenAddress.toHexString()) != -1) {  // toToken is Stable Coin
        fromToken.lastTradePrice = toAmount.times(BI_1e18).div(fromAmount);
        fromToken.save();
    }
}

export function calVolumeUSD(event: WooSwap): BigInt {
    let fromTokenAddress = event.params.fromToken;
    let fromAmount = event.params.fromAmount;
    let toAmount = event.params.toAmount;

    if (BSC_STABLE_TOKENS.indexOf(fromTokenAddress.toHexString()) != -1) {  // fromToken is Stable Coin
        return fromAmount;
    } else {  // toToken is Stable Coin
        return toAmount;
    }
}
