import React from 'react';
import './OrderSideHeader.scss';

interface Props {
    side: 'buy' | 'sell';
}

export const OrderSideHeader: React.FC<Props> = ({ side }) => {
    return (
        <div className={`order-side-header ${side}-side-header`}>
            <div className='column'>Total</div>
            <div className='column'>Size</div>
            <div className='column'>Price</div>
        </div>
    );
}
