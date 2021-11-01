import React from 'react';
import style from './Number.module.scss';
import { formatNumber } from './NumberService';

interface Props {
    amount: number;
}

export const Number: React.FC<Props> = ({ amount }) => {
    return (
        <span className={style.number}>
            {formatNumber(amount)}
        </span>
    );
}
