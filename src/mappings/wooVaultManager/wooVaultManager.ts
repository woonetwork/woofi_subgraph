import {BigInt, Bytes} from "@graphprotocol/graph-ts/index";
import {RewardDistributed} from "../../../generated/WooVaultManager/WooVaultManager"

import {createGlobalVariable} from "../../create";

export function handleRewardDistributed(event: RewardDistributed): void {
    let globalVariable = createGlobalVariable(event);
    globalVariable.wooBuybackVolume = globalVariable.wooBuybackVolume.plus(event.params.amount);
    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();
}
