import numberFormatter from './NumberFormatter';

export const formatNumber = (amount: number) => {
    return numberFormatter.format(amount);
}
