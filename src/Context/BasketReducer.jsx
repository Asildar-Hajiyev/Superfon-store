export function getInitialBasket() {
  const stored = localStorage.getItem("basket");
  return stored ? JSON.parse(stored) : [];
}

function basketReducer(basket, action) {
  const { type, payload } = action;
  let result = basket;

  if (type === "add") result = addItem(basket, payload);
  if (type === "inc") result = changeQuantity(basket, payload.id, 1);
  if (type === "dec") result = changeQuantity(basket, payload.id, -1);
  if (type === "remove") result = removeItem(basket, payload.id);
  if (type === "clear") result = [];

  return result;
}

function addItem(basket, product) {
  const found = basket.some((item) => item.id === product.id);

  if (!found) return [...basket, { ...product, quantity: 1 }];
  return changeQuantity(basket, product.id, 1);
}

function changeQuantity(basket, id, step) {
  return basket
    .map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + step } : item,
    )
    .filter((item) => item.quantity > 0);
}

function removeItem(basket, id) {
  return basket.filter((item) => item.id !== id);
}

export default basketReducer;