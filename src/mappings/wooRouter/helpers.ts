import {BigInt} from "@graphprotocol/graph-ts"
import {WooRouterSwap} from "../../../generated/WooRouter/WooRouter";
import {exponentToBigInt} from "../../utils";
import {
    ZERO_BI,
    TWO_BI,
    BI_6,
    BI_8,
    BI_18,
    ALICE,
    DOGE,
    BSC_STABLE_TOKENS,
} from "../../constants";
import {createToken} from "../../genericCreate";

export function calVolumeUSD(event: WooRouterSwap): BigInt {
    let BI_1e6 = exponentToBigInt(BI_6);
    let BI_1e8 = exponentToBigInt(BI_8);
    let BI_1e18 = exponentToBigInt(BI_18);
    let fromTokenAddress = event.params.fromToken;
    let toTokenAddress = event.params.toToken;
    let fromAmount = event.params.fromAmount;
    let toAmount = event.params.toAmount;
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    let volumeUSD: BigInt
    if (fromToken.lastTradePrice != ZERO_BI) {
        if (fromTokenAddress.toHexString() == ALICE) {
            volumeUSD = fromAmount.times(fromToken.lastTradePrice).div(BI_1e6);
        } else if (fromTokenAddress.toHexString() == DOGE) {
            volumeUSD = fromAmount.times(fromToken.lastTradePrice).div(BI_1e8);
        } else {
            volumeUSD = fromAmount.times(fromToken.lastTradePrice).div(BI_1e18);
        }
    } else {
        volumeUSD = toAmount.times(toToken.lastTradePrice).div(BI_1e18);
        if (fromTokenAddress.toHexString() == ALICE) {
            volumeUSD = toAmount.times(toToken.lastTradePrice).div(BI_1e6);
        } else if (fromTokenAddress.toHexString() == DOGE) {
            volumeUSD = toAmount.times(toToken.lastTradePrice).div(BI_1e8);
        } else {
            volumeUSD = toAmount.times(toToken.lastTradePrice).div(BI_1e18);
        }
    }

    if (
      BSC_STABLE_TOKENS[1] != fromTokenAddress.toHexString() && BSC_STABLE_TOKENS[1] != toTokenAddress.toHexString()
      && event.params.swapType == 0
    ) {
        volumeUSD = volumeUSD.times(TWO_BI);
    }

    return volumeUSD;
}
