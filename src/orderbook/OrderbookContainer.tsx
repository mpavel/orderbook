import React from 'react';
import './Orderbook.scss';
import { NumberStyle, OrderLevel } from '../components';

interface Props {}

export const OrderbookContainer: React.FC<Props> = ({}) => {
    return (
        <div className='wrapper'>
            <div className='orderbook'>
                <div className='title'>
                    <div className='name'>Order Book</div>
                    <div className='spread'>Spread: <NumberStyle>17.0 (0.05%)</NumberStyle></div>
                </div>
                <div className='body'>
                    <div className='buySide'>
                        <div className='header'>
                            <div className='column'>Total</div>
                            <div className='column'>Size</div>
                            <div className='column'>Price</div>
                        </div>
                        <OrderLevel total={1200} size={1200} price={34500.5} depth={10} />
                        <OrderLevel total={1200} size={1200} price={34500.5} depth={20} />
                    </div>
                    <div className='sellSide'>
                        <div className='header'>
                            <div className='column'>Total</div>
                            <div className='column'>Size</div>
                            <div className='column'>Price</div>
                        </div>
                        <OrderLevel total={1200} size={1200} price={34500.5} depth={10} />
                        <OrderLevel total={1200} size={1200} price={34500.5} depth={20} />
                    </div>
                </div>
            </div>
        </div>
    );
}
