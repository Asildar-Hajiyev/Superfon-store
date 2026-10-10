import { useContext, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { FiWatch } from "react-icons/fi";
import { PiCarProfileThin } from "react-icons/pi";
import {
  FaCreditCard,
  FaHeadphonesSimple,
  FaAngleRight,
  FaMusic,
  FaRegObjectUngroup,
} from "react-icons/fa6";
import { DATA } from "../Context/Context";
import { Link } from "react-router-dom";

function Catalog({ setQuery }) {
  const { menuItems } = useContext(DATA);
  const [isOpen, setIsOpen] = useState(false);

  const ICONS = {
    FaCreditCard,
    FaHeadphonesSimple,
    FiWatch,
    FaMusic,
    PiCarProfileThin,
    FaRegObjectUngroup,
  };

  return (
    <div
      className="relative shrink-0"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="bg-red-500 border-2 border-red-500 flex items-center px-5 py-3 rounded-sm text-xl text-white hover:bg-white hover:text-red-500 gap-2 cursor-pointer whitespace-nowrap">
        <HiBars3BottomRight className="text-2xl" />
        <span>Kataloq</span>
      </div>

      <ul
        className={`absolute top-[calc(100%+10px)] left-0 bg-white shadow-lg border w-[320px] z-50 before:content-[''] before:absolute before:bottom-full before:left-0 before:w-full before:h-[10px] transition-all duration-300 ease-in-out rounded-sm ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible translate-y-2"
        }`}
      >
        { menuItems && menuItems.map((item) => {
          const Icon = ICONS[item.icon];
          return (
            <Link
              to="/products"
              key={item.id}
              onClick={() => {
                setQuery("");
                setIsOpen(false);
              }}
              className="flex items-center justify-between gap-2 p-4 border-b border-gray-300 cursor-pointer text-gray-700 hover:bg-gray-50"
            >
              <span
                className={`flex items-center gap-3 text-2xl ${item.icon ? "" : "pl-9"}`}
              >
                {Icon && <Icon className="text-xl" />}
                <span className="hover:underline text-base">{item.label}</span>
              </span>
              {item.hasArrow && <FaAngleRight />}
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default Catalog;