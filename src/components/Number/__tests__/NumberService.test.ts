import { formatNumber } from '../NumberService';

describe('NumberService', () => {
    describe('formatNumber()', () => {
        it('formats a number as string with no decimals', () => {
            expect(formatNumber(1)).toEqual('1');
        });

        it('formats a number as string with minimum number of decimals', () => {
            expect(formatNumber(1.5)).toEqual('1.5');
        });

        it('it formats a number as string with thousands separator and no decimals', () => {
            expect(formatNumber(1000)).toEqual('1,000');
        });

        it(
            'it formats a number as string with thousands separator and minimum number of decimals',
            () => {
                expect(formatNumber(1000.10)).toEqual('1,000.1');
            },
        );
    });
});
