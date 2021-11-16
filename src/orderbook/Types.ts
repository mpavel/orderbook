import type { Level } from '../components/OrderSide/Types';

export type Order = [price: number, size: number];
export type OrderWithTotal = [price: number, size: number, total: number];

export enum Sort {
    ASC = 'ascending',
    DESC = 'descending'
}

export interface OrderbookViewModel {
    buyLevels: Level[];
    sellLevels: Level[];
    spreadValue: number;
    spreadPercentage: number;
}

