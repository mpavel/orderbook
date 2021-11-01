import React from 'react';
import { NumberStyle, OrderSide, Side } from '../components';
import './Orderbook.scss';


interface Props {}

export const OrderbookView: React.FC<Props> = ({}) => {
    return (
        <div className='wrapper'>
            <div className='orderbook'>
                <div className='orderbook__title'>
                    <div className='name'>Order Book</div>
                    <div className='spread'>
                        Spread:
                        <NumberStyle>17.0 (0.05%)</NumberStyle>
                    </div>
                </div>
                <div className='orderbook__body'>
                    <OrderSide side={Side.BUY} />
                    <OrderSide side={Side.SELL} />
                </div>
            </div>
        </div>
    );
}
