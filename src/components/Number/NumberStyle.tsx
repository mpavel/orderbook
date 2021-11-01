import React from 'react';
import style from './Number.module.scss';

export const NumberStyle: React.FC = ({ children }) => {
    return (
        <span className={style.number}>{children}</span>
    );
}
