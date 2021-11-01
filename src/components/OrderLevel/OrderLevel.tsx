import React from 'react';
import { Number } from '../Number/Number';
import { Price } from '../Price/Price';
import './OrderLevel.scss';
import { Level, Side } from '../OrderSide/Types';

interface Props {
    level: Level;
    side: Side;
}

export const OrderLevel: React.FC<Props> = ({ level, side }) => {
    const { total, size, price, depth } = level;

    return (
        <div className='row'>
            <div className='column'><Number amount={total} /></div>
            <div className='column'><Number amount={size} /></div>
            <div className='column'><Price amount={price} bold side={side} /></div>
            <div className='depth' style={{ width: `${depth}%` }} />
        </div>
    );
}
