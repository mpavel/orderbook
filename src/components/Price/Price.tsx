import React from 'react';
import classNames from 'classnames';
import style from './Price.module.scss';
import { formatPrice } from './PriceService';
import { Side } from '../OrderSide/Types';

interface Props {
    amount: number;
    side?: Side,
    bold?: boolean;
}

export const Price: React.FC<Props> = ({ amount, side, bold = false }) => {
    const numberClass = classNames({
        [`${style.number}`]: true,
        [`${style.buy}`]: side === Side.BUY,
        [`${style.sell}`]: side === Side.SELL,
        [`${style.bold}`]: bold,
    });
    return (
        <span className={numberClass}>
            {formatPrice(amount)}
        </span>
    );
}
