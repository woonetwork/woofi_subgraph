import {WooRouterSwap} from "../../../generated/WooRouter/WooRouter";
import {
    OrderHistory
} from "../../../generated/schema";
import {createOrderHistoryVariable} from "../../genericCreate";

export function createOrderHistory(event: WooRouterSwap): OrderHistory {
    let orderHistoryID = event.transaction.hash.toHexString().concat("-").concat(event.logIndex.toString());
    let orderHistory = OrderHistory.load(orderHistoryID);
    if (orderHistory == null) {
        orderHistory = new OrderHistory(orderHistoryID);
        orderHistory.source = event.params.swapType;
        orderHistory.hash = event.transaction.hash;
        orderHistory.block = event.block.number;
        orderHistory.timestamp = event.block.timestamp;
        orderHistory.sender = event.transaction.from;
        orderHistory.from = event.params.from;
        orderHistory.tradedByOtherDex = event.transaction.from != event.params.from;
        orderHistory.to = event.params.to;
        orderHistory.fromToken = event.params.fromToken;
        orderHistory.toToken = event.params.toToken;
        orderHistory.fromAmount = event.params.fromAmount;
        orderHistory.toAmount = event.params.toAmount;

        let orderHistoryVariable = createOrderHistoryVariable(event);
        orderHistory.txCount = orderHistoryVariable.txCount;

        orderHistory.save();
    }

    return orderHistory as OrderHistory;
}
