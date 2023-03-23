import { ethereum, BigInt } from "@graphprotocol/graph-ts";
import { createStargateBridgeSendMsg } from "../../create";

export function updateStargateBridgeSendMsg(event: ethereum.Event, msgType: i32, nonce: BigInt): void {
    let stargateBridgeSendMsg = createStargateBridgeSendMsg(event);
    stargateBridgeSendMsg.msgType = msgType;
    stargateBridgeSendMsg.nonce = nonce;
    stargateBridgeSendMsg.updatedAt = event.block.timestamp;

    stargateBridgeSendMsg.save();
}
