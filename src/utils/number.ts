export const prepareSum = (number: number, withIcon = false, isPenny = false): string => {
  const str = isPenny
    ? (number / 100).toFixed(2)
    : number.toFixed(2);

  return withIcon
    ? `${str} ₽`
    : str;
};
