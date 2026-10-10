import { useEffect, useReducer } from "react";
import { WISHLIST } from "./Context";
import { toast } from "react-toastify";
import wishlistReducer from "./WishlistReducer";

function WishlistContext({ children }) {
  const [wistList, dispatch] = useReducer(
    wishlistReducer,
    localStorage.wishlist ? JSON.parse(localStorage.wishlist) : [],
  );

  useEffect(
    () => localStorage.setItem("wishlist", JSON.stringify(wistList)),
    [wistList],
  );

  function addWishlist(id, image, title, price) {
    dispatch({ type: "add", payload: { id, image, title, price } });
    toast.success("Məhsul sevimlilərə əlavə edildi");
  }

  function removeWislist() {
    dispatch({ type: "clear" });
  }

  function removeWislistCart(id) {
    dispatch({ type: "remove", payload: { id } });
    toast.error("Məhsul sevimlilərdən xaric edildi");
  }

  function checkedWislist(item) {
    return wistList.some((e) => e.id === item.id);
  }

  function wishListOnClickMove(item) {
    const isInWishlist = checkedWislist(item);
    isInWishlist
      ? removeWislistCart(item.id)
      : addWishlist(item.id, item.image, item.title, item.price);
  }

  return (
    <WISHLIST.Provider
      value={{
        addWishlist,
        removeWislist,
        removeWislistCart,
        wistList,
        checkedWislist,
        wishListOnClickMove,
      }}
    >
      {children}
    </WISHLIST.Provider>
  );
}

export default WishlistContext;