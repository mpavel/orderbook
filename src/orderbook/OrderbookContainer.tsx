import React from 'react';
import { OrderbookView } from './OrderbookView';
import { buyData, sellData } from './BuySellViewModelData';
import { OrderbookViewModel } from './Types';
import { useOrderbook } from './useOrderbook';


export const OrderbookContainer: React.FC = () => {
    const { bids, asks } = useOrderbook();
    console.log('*** OrderbookContainer', bids, asks);


    const viewModel: OrderbookViewModel = {
        buyLevels: buyData,
        sellLevels: sellData,
        spreadValue: 17,
        spreadPercentage: 0.05,
    };

    return (
        <OrderbookView viewModel={viewModel} />
    );
}
