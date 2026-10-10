function wishlistReducer(wishlist, action) {
  const { type, payload } = action;
  let result = wishlist;

  if (type === "add") result = addItem(wishlist, payload);
  if (type === "remove") result = removeItem(wishlist, payload.id);
  if (type === "clear") result = [];

  return result;
}

function addItem(wishlist, product) {
  const found = wishlist.some((item) => item.id === product.id);

  if (!found) return [...wishlist, { ...product, quantity: 1 }];
  return changeQuantity(wishlist, product.id, 1);
}

function changeQuantity(wishlist, id, step) {
  return wishlist.map((item) =>
    item.id === id ? { ...item, quantity: item.quantity + step } : item,
  );
}

function removeItem(wishlist, id) {
  return wishlist.filter((item) => item.id !== id);
}

export default wishlistReducer;