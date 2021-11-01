import priceFormatter from './PriceFormatter';

export const formatPrice = (amount: number) => {
    return priceFormatter.format(amount);
}
