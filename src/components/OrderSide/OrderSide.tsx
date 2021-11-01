import React from 'react';
import { OrderSideHeader } from '../OrderSideHeader/OrderSideHeader';
import { OrderLevel } from '../OrderLevel/OrderLevel';
import './OrderSide.scss';
import type { Side } from './Types';

interface Props {
    side: Side;
}

export const OrderSide: React.FC<Props> = ({ side }) => {
    return (
        <div className={`${side}-side`}>
            <OrderSideHeader side={side} />
            <OrderLevel total={1200} size={1200} price={34500.5} depth={10} side={side} />
            <OrderLevel total={1200} size={1200} price={34500.5} depth={20} side={side} />
        </div>
    );
}
