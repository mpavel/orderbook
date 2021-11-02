import { Order } from './Types';

const shouldRemoveExistingOrder = (
    deltaSize: number,
    deltaPrice: number,
    price: number,
): boolean => deltaSize === 0 && deltaPrice === price;

const isCurrentOrder = (price: number, deltaPrice: number): boolean => price === deltaPrice;

const isNewOrder = (orders: Order[], price: number) => {
    const order = orders.find(order => order[0] === price);
    return !order;
}

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
        const newOrders: Order[] = [...existingOrders];

        for (const deltaOrder of deltaOrders) {
            const deltaPrice = deltaOrder[0];
            const deltaSize = deltaOrder[1];

            let length = newOrders.length;
            let i = 0;
            while (i < length) {
                const price = newOrders[i][0];

                if (shouldRemoveExistingOrder(deltaSize, deltaPrice, price)) {
                    newOrders.splice(i, 1);
                    break;
                }
                if (isCurrentOrder(deltaPrice, price)) {
                    newOrders[i] = [price, deltaSize];
                    break;
                }
                if (deltaSize !== 0 && isNewOrder(newOrders, deltaPrice)) {
                    newOrders.push([deltaPrice, deltaSize]);
                }
                i++;
            }
        }

        return newOrders;
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
