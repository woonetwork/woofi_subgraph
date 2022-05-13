import {BigInt, Bytes} from "@graphprotocol/graph-ts/index";
import {RewardDistributed as RewardDistributedV1} from "../../../generated/WooVaultManagerV1/WooVaultManager"
import {RewardDistributed as RewardDistributedV2} from "../../../generated/WooVaultManagerV1/WooVaultManager"

import {createGlobalVariable} from "../../create";
import {ethereum} from "@graphprotocol/graph-ts";

export function handleRewardDistributedV2(event: RewardDistributedV2): void {
    handleRewardDistributed(event, event.params.amount);
}

export function handleRewardDistributedV1(event: RewardDistributedV1): void {
    handleRewardDistributed(event, event.params.amount);
}

export function handleRewardDistributed(event: ethereum.Event, buybackVolume: BigInt): void {
    let globalVariable = createGlobalVariable(event);
    globalVariable.wooBuybackVolume = globalVariable.wooBuybackVolume.plus(buybackVolume);
    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();
}
