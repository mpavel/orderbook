import React from 'react';
import './Orderbook.scss';
import { Number, NumberStyle, Price } from '../components';

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
                        <div className='row'>
                            <div className='column'><Number amount={1200} /></div>
                            <div className='column'><Number amount={1200} /></div>
                            <div className='column'><Price amount={34500.5} bold></Price></div>
                            <div className='depth' style={{ width: '10%' }}></div>
                        </div>
                        <div className='row'>
                            <div className='column'><Number amount={1200} /></div>
                            <div className='column'><Number amount={1200} /></div>
                            <div className='column'><Price amount={34500.5} bold></Price></div>
                            <div className='depth' style={{ width: '20%' }}></div>
                        </div>
                    </div>
                    <div className='sellSide'>
                        <div className='header'>
                            <div className='column'>Total</div>
                            <div className='column'>Size</div>
                            <div className='column'>Price</div>
                        </div>
                        <div className='row'>
                            <div className='column'>1200</div>
                            <div className='column'>1200</div>
                            <div className='column price'>34,500.50</div>
                            <div className='depth' style={{ width: '10%' }}></div>
                        </div>
                        <div className='row'>
                            <div className='column'>1200</div>
                            <div className='column'>1200</div>
                            <div className='column price'>34,500.50</div>
                            <div className='depth' style={{ width: '25%' }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
