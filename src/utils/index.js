export const formatPirce = (price) => {
  const _p = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price.toFixed(2));
  return _p;
};
