// type PriceLevel = [price: number, size: number];

interface Order {
    [index: number]: number;
}

const shouldRemoveExistingOrder = (
    deltaSize: number,
    deltaPrice: number,
    price: number,
): boolean => deltaSize === 0 && deltaPrice === price;

const isExistingOrder = (price: number, deltaPrice: number): boolean => price === deltaPrice;

export class Orderbook {
    private _bids: Order[] = [];
    private _asks: Order[] = [];

    constructor(bids: Order[], asks: Order[]) {
        this._bids = bids;
        this._asks = asks;
    }

    get bids() {
        return this._bids;
    }

    get asks() {
        return this._asks
    }

    private updateOrders = (existingOrders: Order[], deltaOrders: Order[]) => {
        const updatedBids: Order[] = [];
        deltaOrders.forEach(order => {
            let found = false;

            const deltaPrice = order[0];
            const deltaSize = order[1];

            existingOrders.forEach(existingOrder => {
                const price = existingOrder[0];
                const size = existingOrder[1];

                if (shouldRemoveExistingOrder(deltaSize, deltaPrice, price)) {
                    found = true;
                    return;
                }
                if (isExistingOrder(deltaPrice, price)) {
                    updatedBids.push([price, deltaSize]);
                    found = true;
                } else {
                    // no changes, leave as it was
                    updatedBids.push([price, size]);
                }
            });

            if (!found) {
                // not found, must add a new one
                updatedBids.push([deltaPrice, deltaSize]);
            }
        });

        return updatedBids;
    }

    update = (deltaBids: Order[], deltaAsks: Order[]) => {
        this._bids = this.updateOrders(this._bids, deltaBids);
        this._asks = this.updateOrders(this._asks, deltaAsks);
    }

    private ordersWithTotals = (orders: Order[]) => {
        let total = 0;
        return orders.map(order => {
            return [order[0], order[1], total += order[1]];
        });
    }

    get bidsWithTotals() {
        return this.ordersWithTotals(this._bids);
    }

    get asksWithTotals() {
        return this.ordersWithTotals(this._asks);
    }
}
