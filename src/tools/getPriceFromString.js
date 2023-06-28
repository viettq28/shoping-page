export default function getPrice(priceString) {
  return (+priceString).toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND',
    currencyDisplay: 'code',
  });
}
