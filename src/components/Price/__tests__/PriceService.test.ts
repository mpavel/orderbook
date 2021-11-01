import { formatPrice } from '../PriceService';

describe('PriceService', () => {
    describe('formatNumber()', () => {
        it('formats a number as a string with two decimals', () => {
            expect(formatPrice(1)).toEqual('1.00');
        });

        it('formats a number with decimals as a string with two decimals', () => {
            expect(formatPrice(1.5)).toEqual('1.50');
        });

        it('it formats a number as a string with thousands separator and two decimals', () => {
            expect(formatPrice(1000)).toEqual('1,000.00');
        });

        it(
            'it formats a number with decimals as a string with thousands separator and two decimals',
            () => {
                expect(formatPrice(1000.10)).toEqual('1,000.10');
            },
        );
    });
});
