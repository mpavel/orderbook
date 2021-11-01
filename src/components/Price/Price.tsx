import React from 'react';
import classNames from 'classnames';
import style from './Price.module.scss';
import { formatPrice } from './PriceService';

interface Props {
    amount: number;
    order?: 'buy' | 'sell',
    bold?: boolean;
}

export const Price: React.FC<Props> = ({ amount, order, bold = false }) => {
    const numberClass = classNames({
        [`${style.number}`]: true,
        [`${style.buy}`]: order === 'buy',
        [`${style.sell}`]: order === 'sell',
        [`${style.bold}`]: bold,
    });
    return (
        <span className={numberClass}>
            {formatPrice(amount)}
        </span>
    );
}
