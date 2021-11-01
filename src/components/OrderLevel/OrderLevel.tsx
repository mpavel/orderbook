import React from 'react';
import { Number } from '../Number/Number';
import { Price } from '../Price/Price';
import './OrderLevel.scss';
import { Side } from '../OrderSide/Types';

interface Props {
    total: number;
    size: number;
    price: number;
    depth: number;
    side: Side;
}

export const OrderLevel: React.FC<Props> = ({ total, size, price, depth, side }) => {
    return (
        <div className='row'>
            <div className='column'><Number amount={total} /></div>
            <div className='column'><Number amount={size} /></div>
            <div className='column'><Price amount={price} bold side={side} /></div>
            <div className='depth' style={{ width: `${depth}%` }} />
        </div>
    );
}
