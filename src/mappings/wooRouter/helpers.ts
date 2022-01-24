import {BigInt} from "@graphprotocol/graph-ts"
import {WooRouterSwap} from "../../../generated/WooRouter/WooRouter";
import {exponentToBigInt} from "../../utils";
import {
    BI_0,
    BI_2,
    BI_18,
    STABLE_TOKENS,
} from "../../constants";
import {createToken} from "../../create";

export function calVolumeUSD(event: WooRouterSwap): BigInt {
    let BI_1e18 = exponentToBigInt(BI_18);
    let fromTokenAddress = event.params.fromToken;
    let toTokenAddress = event.params.toToken;
    let fromAmount = event.params.fromAmount;
    let toAmount = event.params.toAmount;
    let fromToken = createToken(event, fromTokenAddress);
    let toToken = createToken(event, toTokenAddress);

    let volumeUSD: BigInt
    if (fromToken.lastTradePrice != BI_0) {
        if (fromToken.decimals != BI_18) {
            let BI_1eDoubleDecimals = exponentToBigInt(fromToken.decimals.times(BI_2))
            volumeUSD = fromAmount.times(BI_1e18).div(BI_1eDoubleDecimals).times(fromToken.lastTradePrice)
        } else {
            volumeUSD = fromAmount.times(fromToken.lastTradePrice).div(BI_1e18);
        }
    } else {
        if (toToken.decimals != BI_18) {
            let BI_1eDoubleDecimals = exponentToBigInt(toToken.decimals.times(BI_2))
            volumeUSD = toAmount.times(BI_1e18).div(BI_1eDoubleDecimals).times(toToken.lastTradePrice)
        } else {
            volumeUSD = toAmount.times(toToken.lastTradePrice).div(BI_1e18);
        }
    }

    if (
      STABLE_TOKENS[1] != fromTokenAddress.toHexString() && STABLE_TOKENS[1] != toTokenAddress.toHexString()
      && event.params.swapType == 0
    ) {
        volumeUSD = volumeUSD.times(BI_2);
    }

    return volumeUSD;
}
