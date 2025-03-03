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
  let entityID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
  let entity = new OFTReceived(entityID);
  entity.guid = event.params.guid.toHexString();
  entity.srcEid = event.params.srcEid;
  entity.toAddress = event.params.toAddress.toHexString();
  entity.amountReceivedLD = event.params.amountReceivedLD;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash.toHexString();

  entity.save();
}

export function handleOFTSent(event: OFTSentEvent): void {
  let entityID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
  let entity = new OFTSent(entityID);
  entity.guid = event.params.guid.toHexString();
  entity.dstEid = event.params.dstEid;
  entity.fromAddress = event.params.fromAddress.toHexString();
  entity.amountSentLD = event.params.amountSentLD;
  entity.amountReceivedLD = event.params.amountReceivedLD;

  entity.blockNumber = event.block.number;
  entity.blockTimestamp = event.block.timestamp;
  entity.transactionHash = event.transaction.hash.toHexString();

  entity.save();
}
