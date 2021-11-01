import React from 'react';
import { NumberStyle, OrderSide, Side } from '../components';
import './Orderbook.scss';
import { OrderbookViewModel } from './Types';


interface Props {
    viewModel: OrderbookViewModel;
}

export const OrderbookView: React.FC<Props> = ({ viewModel }) => {
    const { buyLevels, sellLevels, spreadValue, spreadPercentage } = viewModel;
    return (
        <div className='wrapper'>
            <div className='orderbook'>
                <div className='orderbook__title'>
                    <div className='name'>Order Book</div>
                    <div className='spread'>
                        Spread: <NumberStyle>{spreadValue} ({spreadPercentage}%)</NumberStyle>
                    </div>
                </div>

                <div className='orderbook__body'>
                    <OrderSide side={Side.BUY} levels={buyLevels} />
                    <OrderSide side={Side.SELL} levels={sellLevels} />
                </div>
            </div>
        </div>
    );
}
