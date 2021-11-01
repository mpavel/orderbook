import React from 'react';
import style from './Orderbook.module.scss';

interface Props {}

export const OrderbookContainer: React.FC<Props> = ({}) => {
    return (
        <div className={style.wrapper}>
            <p>Orderbook Container</p>
        </div>
    );
}
