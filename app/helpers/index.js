const moneyFormat = (value) => {
  const formatter = new Intl.NumberFormat("es-MX", {
    style: "currency",
    currency: "MXN",
  });
  return formatter.format(value);
};

export { moneyFormat };
