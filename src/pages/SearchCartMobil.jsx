import { CiShoppingCart } from "react-icons/ci";
import { BASKET } from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
function SearchCartMobil({ item, i, setQuery }) {
  const { addBasket } = useContext(BASKET);
  return (
    <Link
      to={`/details/${item.id}`}
      key={i}
      className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
    >
      <div
        onClick={() => setQuery("")}
        className="w-12 h-12 shrink-0 rounded-md bg-gray-100 overflow-hidden flex items-center justify-center"
      >
        <img
          className="w-full h-full object-contain"
          src={item.image}
          alt={item.title}
        />
      </div>

      <div onClick={() => setQuery("")} className="flex-1 min-w-0">
        <p className="text-sm text-gray-800 truncate">{item.title}</p>
        {item.price && (
          <span className="text-sm font-semibold text-gray-900">
            {item.price} ₼
          </span>
        )}
      </div>

      <button
        onClick={() => addBasket(item.id, item.image, item.title, item.price)}
        className="shrink-0 p-2 rounded-full text-gray-500 hover:text-orange-500 hover:bg-orange-50 transition-colors duration-150 cursor-pointer"
        aria-label="Səbətə əlavə et"
      >
        <CiShoppingCart className="text-xl" />
      </button>
    </Link>
  );
}

export default SearchCartMobil;
