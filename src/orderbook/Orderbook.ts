import { Order, OrderWithTotal, Sort } from './Types';

const shouldRemoveExistingOrder = (
    deltaSize: number,
    deltaPrice: number,
    price: number,
): boolean => deltaSize === 0 && deltaPrice === price;

const SortMap = {
    [Sort.ASC]: -1,
    [Sort.DESC]: 1,
}

export const updateOrders = (
    existingOrders: Order[],
    deltaOrders: Order[],
    sort: Sort,
): Order[] => {
    return existingOrders.filter(existingOrder => {
        const deltaOrder = deltaOrders.find(deltaOrder => deltaOrder[0] === existingOrder[0]);
        if (deltaOrder && shouldRemoveExistingOrder(
            deltaOrder[1],
            deltaOrder[0],
            existingOrder[0],
        )) {
            return false;
        }

        return true;
    }).map(existingOrder => {
        const deltaOrder = deltaOrders.find(deltaOrder => deltaOrder[1] !== 0 && deltaOrder[0] === existingOrder[0]);
        if (deltaOrder) {
            return [
                existingOrder[0],
                deltaOrder[1],
            ];
        }

        return existingOrder;
    }).concat(deltaOrders.filter(deltaOrder => {
        const hasExistingOrder = existingOrders.find(existingOrder => deltaOrder[0] === existingOrder[0]);
        if (hasExistingOrder || deltaOrder[1] === 0) {
            return false
        }
        return true;
    })).sort((firstOrder, secondOrder) => {
        if (firstOrder[0] < secondOrder[0]) {
            return SortMap[sort];
        }

        return -1 * SortMap[sort];
    }) as Order[];
};

export const ordersWithTotals = (orders: Order[]): OrderWithTotal[] => {
    let total = 0;
    return orders.map(order => {
        return [order[0], order[1], total += order[1]];
    });
}
