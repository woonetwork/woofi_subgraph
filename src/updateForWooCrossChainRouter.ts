import {ethereum} from "@graphprotocol/graph-ts/index";
import {
    createCrossChainSrcOrderHistoryVariable,
    createCrossChainDstOrderHistoryVariable,
} from "./create";
import {BI_1} from "./constants";

export function updateCrossChainSrcOrderHistoryVariable(event: ethereum.Event): void {
    let crossChainSrcOrderHistoryVariable = createCrossChainSrcOrderHistoryVariable(event);

    crossChainSrcOrderHistoryVariable.txns = crossChainSrcOrderHistoryVariable.txns.plus(BI_1);
    crossChainSrcOrderHistoryVariable.updatedAt = event.block.timestamp;

    crossChainSrcOrderHistoryVariable.save();
}

export function updateCrossChainDstOrderHistoryVariable(event: ethereum.Event): void {
    let crossChainDstOrderHistoryVariable = createCrossChainDstOrderHistoryVariable(event);

    crossChainDstOrderHistoryVariable.txns = crossChainDstOrderHistoryVariable.txns.plus(BI_1);
    crossChainDstOrderHistoryVariable.updatedAt = event.block.timestamp;

    crossChainDstOrderHistoryVariable.save();
}
