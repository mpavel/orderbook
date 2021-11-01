import React from 'react';
import { OrderbookView } from './OrderbookView';
import { buyData, sellData } from './BuySellViewModelData';
import { OrderbookViewModel } from './Types';


export const OrderbookContainer: React.FC = () => {
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
