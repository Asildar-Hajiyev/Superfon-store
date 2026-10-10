function corpareReducer(corpare, action) {
  const { type, payload } = action;
  let result = corpare;

  if (type === "add") result = addItem(corpare, payload);
  if (type === "remove") result = removeItem(corpare, payload.id);
  if (type === "clear") result = [];

  return result;
}

function addItem(corpare, item) {
  const found = corpare.some((p) => p.id === item.id);

  if (found) return removeItem(corpare, item.id); // artıq varsa çıxar (toggle)
  if (corpare.length >= 4) return corpare; // limit
  return [...corpare, item];
}

function removeItem(corpare, id) {
  return corpare.filter((p) => p.id !== id);
}

export default corpareReducer;