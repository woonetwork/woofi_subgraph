import {
  OFTReceived as OFTReceivedEvent,
  OFTSent as OFTSentEvent,
} from "../../../generated/WooTokenOFT/WooTokenOFT"
import {
  OFTReceived,
  OFTSent,
} from "../../../generated/schema"
import { Bytes } from "@graphprotocol/graph-ts"

export function handleOFTReceived(event: OFTReceivedEvent): void {
  let entity = new OFTReceived(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.guid = event.params.guid;
  entity.srcEid = event.params.srcEid;
  entity.toAddress = event.params.toAddress;
  entity.amountReceivedLD = event.params.amountReceivedLD;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}

export function handleOFTSent(event: OFTSentEvent): void {
  let entity = new OFTSent(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  );
  entity.guid = event.params.guid;
  entity.dstEid = event.params.dstEid;
  entity.fromAddress = event.params.fromAddress;
  entity.amountSentLD = event.params.amountSentLD;
  entity.amountReceivedLD = event.params.amountReceivedLD;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash;

  entity.save();
}
