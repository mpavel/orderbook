import { Orderbook } from '../Orderbook';
import { Order } from '../Types';

const bids: Order[] = [
    [1000, 50],
    [1005, 100],
    [1010, 1000],
];
const asks: Order[] = [
    [980, 10],
    [970, 20],
    [960, 30],
];

describe('Orderbook', () => {
    it('has a list of bids and a list of asks', () => {
        const orderbook = new Orderbook([], []);

        expect(orderbook.bids).toEqual([]);
        expect(orderbook.asks).toEqual([]);
    });

    it('calculates the totals', () => {
        const orderbook = new Orderbook(bids, asks);

        expect(orderbook.bidsWithTotals).toEqual([
            [1000, 50, 50],
            [1005, 100, 150],
            [1010, 1000, 1150],
        ]);
        expect(orderbook.asksWithTotals).toEqual([
            [980, 10, 10],
            [970, 20, 30],
            [960, 30, 60],
        ]);
    });

    it('removes bids and asks which are updated with a size of 0', () => {
        const orderbook = new Orderbook(bids, asks);

        orderbook.update([[1005, 0.0], [1200, 10], [1010, 200]], [[960, 0.0]]);

        expect(orderbook.bids).toEqual([
            [1000, 50],
            [1010, 200],
            [1200, 10],
        ]);
        expect(orderbook.asks).toEqual([
            [980, 10],
            [970, 20],
        ]);
    });

    it('ads bids and asks', () => {
        const orderbook = new Orderbook(bids, asks);

        orderbook.update([[1020, 2000]], [[950, 40]]);

        expect(orderbook.bids).toEqual([
            [1000, 50],
            [1005, 100],
            [1010, 1000],
            [1020, 2000],
        ]);
        expect(orderbook.asks).toEqual([
            [980, 10],
            [970, 20],
            [960, 30],
            [950, 40],
        ]);
    });
});
