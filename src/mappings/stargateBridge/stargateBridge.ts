import {BigInt, ethereum} from "@graphprotocol/graph-ts/index";
import {SendMsg as StargateBridgeV1SendMsg_1} from "../../../generated/StargateBridgeV1_1/StargateBridgeV1"

import {updateStargateBridgeSendMsg} from "../../update";

export function handleStargateBridgeV1SendMsg_1(event: StargateBridgeV1SendMsg_1): void {
    handleSendMsg(event, event.params.msgType, event.params.nonce);
}

export function handleSendMsg(event: ethereum.Event, msgType: i32, nonce: BigInt): void {
    updateStargateBridgeSendMsg(event, msgType, nonce);
}
