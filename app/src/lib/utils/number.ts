
export const numberWithCommas = (value: number) => {
    const str = value.toString().split('.');
    return `${str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')}${str.length > 1 ? `.${str[1]}` : ''}`;
};
