import {BigInt, Bytes} from "@graphprotocol/graph-ts/index";
import {RewardDistributed as WooVaultManagerV1RewardDistributed_1} from "../../../generated/WooVaultManagerV1_1/WooVaultManagerV1"
import {RewardDistributed as WooVaultManagerV1RewardDistributed_2} from "../../../generated/WooVaultManagerV1_2/WooVaultManagerV1"
import {RewardDistributed as WooVaultManagerV1RewardDistributed_3} from "../../../generated/WooVaultManagerV1_3/WooVaultManagerV1"

import {createDayData, createGlobalVariable} from "../../create";
import {ethereum} from "@graphprotocol/graph-ts";

export function handleWooVaultManagerV1RewardDistributed_3(event: WooVaultManagerV1RewardDistributed_3): void {
    handleRewardDistributed(event, event.params.amount);
}

export function handleWooVaultManagerV1RewardDistributed_2(event: WooVaultManagerV1RewardDistributed_2): void {
    handleRewardDistributed(event, event.params.amount);
}

export function handleWooVaultManagerV1RewardDistributed_1(event: WooVaultManagerV1RewardDistributed_1): void {
    handleRewardDistributed(event, event.params.amount);
}

export function handleRewardDistributed(event: ethereum.Event, buybackVolume: BigInt): void {
    let globalVariable = createGlobalVariable(event);
    globalVariable.buybackVolumeWOO = globalVariable.buybackVolumeWOO.plus(buybackVolume);
    globalVariable.updatedAt = event.block.timestamp;

    globalVariable.save();

    let dayData = createDayData(event);
    dayData.buybackVolumeWOO = dayData.buybackVolumeWOO.plus(buybackVolume);
    dayData.updatedAt = event.block.timestamp;

    dayData.save();
}
