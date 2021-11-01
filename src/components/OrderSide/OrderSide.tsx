import React from 'react';
import { OrderSideHeader } from '../OrderSideHeader/OrderSideHeader';
import { OrderLevel } from '../OrderLevel/OrderLevel';
import './OrderSide.scss';
import type { Level, Side } from './Types';

interface Props {
    side: Side;
    levels: Level[];
}

export const OrderSide: React.FC<Props> = ({ side, levels }) => {
    return (
        <div className={`${side}-side`}>
            <OrderSideHeader side={side} />

            {levels.map((level, index) =>
                <OrderLevel key={index} level={level} side={side} />,
            )}
        </div>
    );
}
