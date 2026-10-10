import { useContext } from "react";
import { CiTrash, CiCircleCheck } from "react-icons/ci";
import { COMPARE } from "../Context/Context";
import { Link } from "react-router-dom";

function CompareCard({ item, allSpecKeys }) {
  const { removeCorpareCart } = useContext(COMPARE);

  return (
    <div className="flex-shrink-0 w-44 sm:w-52 border-r border-gray-200 last:border-r-0">
      {/* header */}
      <div className="h-[200px] px-3 py-3 relative flex flex-col items-center justify-center border-b border-gray-200">
        <button
          onClick={() => removeCorpareCart(item.id)}
          className="absolute top-2 right-2 text-gray-400 hover:text-red-500 transition cursor-pointer"
        >
          <CiTrash className="text-xl" />
        </button>

        <Link to={`/details/${item.id}`}>
          <img
            src={item.image}
            alt={item.title}
            className="w-20 h-20 object-contain mb-2"
          />
        </Link>

        <Link
          to={`/details/${item.id}`}
          className="font-medium text-sm text-center line-clamp-2 h-10 hover:text-green-600 transition"
        >
          {item.title}
        </Link>

        <p className="text-[#001623] font-mono font-bold text-base mt-1">
          {item.price} ₼
        </p>

        {item.inStock !== undefined && (
          <span className="mt-1 bg-[#f2faf6] text-[#00a34f] rounded-md px-2 py-0.5 text-xs flex items-center gap-1 font-semibold">
            <CiCircleCheck className="text-sm" />
            {item.inStock ? "Anbarda var" : "Anbarda yoxdur"}
          </span>
        )}
      </div>

      {/* specifikasiyalar */}
      {allSpecKeys.map((key) => (
        <div
          key={key}
          className="px-4 py-3 border-b border-gray-200 h-12 flex items-center justify-center text-center text-sm md:text-base text-gray-600"
        >
          {item.specifications?.[key] ?? <span className="text-gray-300">—</span>}
        </div>
      ))}
    </div>
  );
}

export default CompareCard;