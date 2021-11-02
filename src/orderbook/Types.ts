import type { Level } from '../components/OrderSide/Types';

export type Order = [number, number];

export interface OrderbookViewModel {
    buyLevels: Level[];
    sellLevels: Level[];
    spreadValue: number;
    spreadPercentage: number;
}

