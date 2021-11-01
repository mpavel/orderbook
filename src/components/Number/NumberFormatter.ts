const numberFormatter = new Intl.NumberFormat(
    'en-US',
    { style: 'decimal', minimumFractionDigits: 0 },
);

export default numberFormatter;
