import { useEffect, useReducer } from "react";
import { COMPARE } from "./Context";
import { toast } from "react-toastify";
import corpareReducer from "./CorpareReducer";

function CorpareContext({ children }) {
  const [corpare, dispatch] = useReducer(
    corpareReducer,
    localStorage.compare ? JSON.parse(localStorage.compare) : [],
  );

  useEffect(
    () => localStorage.setItem("compare", JSON.stringify(corpare)),
    [corpare],
  );

  function addCorpare(item) {
    dispatch({ type: "add", payload: item });
    toast.success("Məhsul müqayisəyə əlavə edildi");
  }

  function removeCorpare() {
    dispatch({ type: "clear" });
    toast.error("Məhsullar müqayisədən xaric edildi");
  }

  function removeCorpareCart(id) {
    dispatch({ type: "remove", payload: { id } });
    toast.error("Məhsul müqayisədən xaric edildi");
  }

  function checkedCorpare(item) {
    return corpare.some((e) => e.id === item.id);
  }

  function corpareOnClickMove(item) {
    const isInCompare = checkedCorpare(item);
    isInCompare ? removeCorpareCart(item.id) : addCorpare(item);
  }

  return (
    <COMPARE.Provider
      value={{
        addCorpare,
        removeCorpare,
        removeCorpareCart,
        corpare,
        checkedCorpare,
        corpareOnClickMove,
      }}
    >
      {children}
    </COMPARE.Provider>
  );
}

export default CorpareContext;