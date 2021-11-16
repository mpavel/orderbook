import { ordersWithTotals, updateOrders } from '../Orderbook';
import { Order, Sort } from '../Types';

describe('Orderbook', () => {
    describe('updateOrders()', () => {
        it('ads orders', () => {
            const existingAsks: Order[] = [
                [980, 10],
                [970, 20],
                [960, 30],
            ];

            const updatedAsks = updateOrders(existingAsks, [[950, 40]], Sort.DESC);

            expect(updatedAsks).toEqual([
                [980, 10],
                [970, 20],
                [960, 30],
                [950, 40],
            ]);
        });

        it('removes orders which are updated with a size of 0', () => {
            const existingBids: Order[] = [
                [1000, 50],
                [1005, 100],
                [1010, 1000],
            ]
            const deltaBids: Order[] = [
                [1005, 0.0],
                [1200, 10],
                [1010, 200],
            ];

            const updatedBids = updateOrders(existingBids, deltaBids, Sort.ASC);

            expect(updatedBids).toEqual([
                [1000, 50],
                [1010, 200],
                [1200, 10],
            ]);
        });
    });

    describe('ordersWithTotals()', () => {
        it('calculates the totals for a list of orders', () => {
            const orders: Order[] = [
                [1000, 50],
                [1005, 100],
                [1010, 1000],
            ];

            expect(ordersWithTotals(orders)).toEqual([
                [1000, 50, 50],
                [1005, 100, 150],
                [1010, 1000, 1150],
            ]);
        });
    });
});
