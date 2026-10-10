import { useContext } from "react";
import { CiShoppingCart, CiHeart } from "react-icons/ci";
import { GiScales } from "react-icons/gi";

import { Link } from "react-router-dom";
import { BASKET, COMPARE, WISHLIST } from "../Context/Context";

function Card({ item, i }) {
  const { addBasket } = useContext(BASKET);
  const { wishListOnClickMove, checkedWislist } = useContext(WISHLIST);
  const { corpareOnClickMove, checkedCorpare } = useContext(COMPARE);

  return (
   <div className="scale-90 origin-top">

     <div className="group relative w-full max-w-[360px] mx-auto border border-gray-300 rounded-md p-4 flex overflow-hidden my-4">
      <div key={i} className="flex flex-col w-full h-full">
        <Link to={`/details/${item.id}`} className="w-full aspect-square overflow-hidden">
          <img
            className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-125 "
            src={item.image}
            alt={item.title}
          />
        </Link>

        <Link
          to={`/details/${item.id}`}
          className="font-semibold text-sm sm:text-base line-clamp-2 mt-3 h-12 hover:underline hover:text-blue-600 transition"
        >
          {item.title}
        </Link>

        <div className="flex-1"></div>

        <div className="flex items-center justify-between mt-4 gap-2">
          <span className="font-semibold text-lg sm:text-xl">
            {item.price} ₼
          </span>

          <button
            onClick={() =>
              addBasket(item.id, item.image, item.title, item.price)
            }
            className="flex items-center gap-0 group-hover:gap-2 bg-green-600 text-white px-3 py-2 rounded-md transition-all duration-500 cursor-pointer"
          >
            <CiShoppingCart className="text-xl sm:text-2xl" />
            <span className="max-w-0 opacity-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] group-hover:opacity-100 transition-all duration-500 text-sm">
              Səbətə əlavə et
            </span>
          </button>
        </div>
      </div>
      {/* bu hisse cardda favorilere alma heart hissesidir  */}
      <div
        onClick={() => wishListOnClickMove(item)}
        className={`absolute top-6 right-6 p-2 rounded-full border shadow-lg cursor-pointer
    transition-all duration-300 opacity-0 group-hover:opacity-100 ${
      checkedWislist(item)
        ? "bg-white text-red-500 border-red-500 scale-105"
        : "bg-white border-gray-100 text-gray-500 hover:text-red-500 hover:border-red-500"
    }`}
      >
        <CiHeart
          className={`text-2xl ${checkedWislist(item) ? "text-red-500" : ""}`}
        />
      </div>
      {/* bu hisse cardda muqayise button olan hissemdir  */}
      <div
        onClick={() => corpareOnClickMove(item)}
        className={`absolute top-18 right-6 p-2 rounded-full border shadow-lg cursor-pointer
    transition-all duration-300 opacity-0 group-hover:opacity-100 ${
      checkedCorpare(item)
        ? "bg-white text-blue-500 border-blue-500 scale-105"
        : "bg-white text-gray-500 border-gray-100 hover:text-blue-500 hover:border-blue-500"
    }`}
      >
        <GiScales
          className={`text-2xl ${checkedCorpare(item) ? "text-blue-500" : ""}`}
        />
      </div>

      <div
        className={`absolute top-0 left-0 m-4 border rounded-xs px-2 bg-green-700 text-white cursor-pointer ${item.isNew ? "" : "hidden"}`}
      >
        Yeni
      </div>
    </div>
   </div>
  );
}

export default Card;
