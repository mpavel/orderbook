const priceFormatter = new Intl.NumberFormat(
    'en-US',
    { style: 'decimal', minimumFractionDigits: 2 },
);

export default priceFormatter;
