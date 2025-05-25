export function formatCurrency(amount, locale = "vi-VN", currency = "VND") {
  if (typeof amount !== "number") return "0 ₫";
  return amount.toLocaleString(locale, {
    style: "currency",
    currency: currency,
  });
}
