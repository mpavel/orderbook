export const delayedResponse = (numbers: number[]): Promise<string> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('*** Delayed Response every 5s');
            const sum = numbers.reduce(
                (previous, current) => {
                    console.log('*** Adding:', current);

                    return previous + current;
                }, 0);
            resolve(sum.toString());
        }, 5000);
    });
}
