import React from 'react';
import { Number } from '../Number/Number';
import { Price } from '../Price/Price';
import './OrderLevel.scss';

interface Props {
    total: number;
    size: number;
    price: number;
    depth: number;
}

export const OrderLevel: React.FC<Props> = ({ total, size, price, depth }) => {
    return (
        <div className='row'>
            <div className='column'><Number amount={total} /></div>
            <div className='column'><Number amount={size} /></div>
            <div className='column'><Price amount={price} bold /></div>
            <div className='depth' style={{ width: `${depth}%` }} />
        </div>
    );
}
