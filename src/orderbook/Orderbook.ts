import { Order, OrderWithTotal, Sort } from './Types';

const shouldRemoveExistingOrder = (deltaOrder?: Order): boolean => !!deltaOrder && deltaOrder[1] === 0;

const isExistingOrder = (
    deltaOrder: Order,
    existingOrder: Order,
): boolean => deltaOrder[1] !== 0 && deltaOrder[0] === existingOrder[0];

const isNewOrder = (deltaOrder: Order, existingOrders: Order[]): boolean => {
    if (deltaOrder[1] === 0) {
        return false;
    }

    const existingOrder = existingOrders.find(existingOrder => isExistingOrder(
        deltaOrder,
        existingOrder,
    ));
    return !existingOrder;
}

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
        // Remove orders with price '0' from the list
        const deltaOrder = deltaOrders.find(deltaOrder => deltaOrder[0] === existingOrder[0]);
        return !shouldRemoveExistingOrder(deltaOrder);
    }).map(existingOrder => {
        // Update existing order
        const updatedOrder = deltaOrders.find(deltaOrder => isExistingOrder(
            deltaOrder,
            existingOrder,
        ));
        if (updatedOrder) {
            return [
                existingOrder[0],
                updatedOrder[1],
            ];
        }

        return existingOrder;
    }).concat(deltaOrders.filter(deltaOrder => {
        // Add new orders
        return isNewOrder(deltaOrder, existingOrders);
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
