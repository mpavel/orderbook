import React from 'react';
import { OrderbookView } from './OrderbookView';
import { OrderbookViewModel } from './Types';
import { useOrderbook } from './useOrderbook';
import { ordersWithTotals } from './Orderbook';

export const OrderbookContainer: React.FC = () => {
    const { bids, asks } = useOrderbook();

    const viewModel: OrderbookViewModel = {
        buyLevels: ordersWithTotals(bids).map(bid => ({
            price: bid[0],
            size: bid[1],
            total: bid[2],
            depth: 0,
        })),
        sellLevels: ordersWithTotals(asks).map(ask => ({
            price: ask[0],
            size: ask[1],
            total: ask[2],
            depth: 45,
        })),
        spreadValue: 17,
        spreadPercentage: 0.05,
    };

    return (
        <OrderbookView viewModel={viewModel} />
    );
}
