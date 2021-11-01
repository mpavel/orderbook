export enum Side {
    BUY = 'buy',
    SELL = 'sell',
}

export interface Level {
    price: number,
    size: number,
    total: number,
    depth: number;
}
