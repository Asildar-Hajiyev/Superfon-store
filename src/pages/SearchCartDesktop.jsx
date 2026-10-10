import { CiShoppingCart } from "react-icons/ci";
import { BASKET } from "../Context/Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
function SearchCartDesktop({ item, i, setQuery }) {
  const { addBasket } = useContext(BASKET);
  return (
    <li
      key={i}
      className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-all duration-150 cursor-pointer"
    >
      <Link
        to={`/details/${item.id}`}
        onClick={()=>setQuery("")}
        className="flex items-center gap-3 flex-1 min-w-0"
      >
        <div className="w-14 h-14 shrink-0 rounded-md bg-gray-50 overflow-hidden flex items-center justify-center">
          <img
            className="w-full h-full object-contain p-1"
            src={item.image}
            alt={item.title}
          />
        </div>

        <div className="flex-1 min-w-0">
          <p className="text-sm text-gray-800 truncate leading-snug">
            {item.title}
          </p>
          {item.price && (
            <span className="text-sm font-semibold text-gray-900">
              {item.price} ₼
            </span>
          )}
        </div>
      </Link>

      <button
        onClick={() => addBasket(item.id, item.image, item.title, item.price)}
        className="shrink-0 w-8 h-8 flex items-center justify-center rounded-full text-gray-400 hover:text-white hover:bg-orange-500 transition-colors duration-150 cursor-pointer"
        aria-label="Səbətə əlavə et"
      >
        <CiShoppingCart className="text-lg" />
      </button>
    </li>
  );
}

export default SearchCartDesktop;
