import { useEffect, useReducer } from "react";
import { BASKET } from "./Context";
import { toast } from "react-toastify";
import basketReducer, { getInitialBasket } from "./BasketReducer";

function BasketContext({ children }) {
  const [sebet, dispatch] = useReducer(basketReducer, [], getInitialBasket);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(sebet));
  }, [sebet]);

  function addBasket(id, image, title, price) {
    dispatch({ type: "add", payload: { id, image, title, price } });
    toast.success("Məhsul çantaya əlavə edildi");
  }

  function incQuantity(id) {
    dispatch({ type: "inc", payload: { id } });
  }

  function decQuantity(id) {
    dispatch({ type: "dec", payload: { id } });
  }

  function removeBasket() {
    dispatch({ type: "clear" });
    toast.error("Məhsullar çantadan çıxarıldı");
  }

  function removeBasketCart(id) {
    dispatch({ type: "remove", payload: { id } });
    toast.error("Məhsul çantadan çıxarıldı");
  }

  const totalCount = sebet.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = sebet.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const discount =
    totalCount >= 15
      ? 100
      : totalCount >= 10
        ? 64
        : totalCount >= 6
          ? 48
          : totalCount >= 3
            ? 21
            : 0;
  const finalPrice = Math.max(totalPrice - discount, 0);

  return (
    <BASKET.Provider
      value={{
        addBasket,
        removeBasket,
        removeBasketCart,
        sebet,
        incQuantity,
        decQuantity,
        totalPrice,
        totalCount,
        discount,
        finalPrice,
      }}
    >
      {children}
    </BASKET.Provider>
  );
}

export default BasketContext;