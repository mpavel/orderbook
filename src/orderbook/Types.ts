import type { Level } from '../components/OrderSide/Types';

export interface OrderbookViewModel {
    buyLevels: Level[];
    sellLevels: Level[];
    spreadValue: number;
    spreadPercentage: number;
}
