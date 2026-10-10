// sec1 asagi lazimsiz hissesi))

import { MdOutlinePayment } from "react-icons/md";
import { HiOutlineTruck } from "react-icons/hi2";
import { IoExitOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
function Advantages() {
  const iconsec2 = [
    {
      id: 1,
      icon: MdOutlinePayment,
      title: "Asan və təhlükəsiz ödəniş",
      path: "/",
    },
    { id: 2, icon: HiOutlineTruck, title: "Sürətli çatdırılma", path: "/" },
    { id: 3, icon: IoExitOutline, title: "Qaytarma və dəyişmə", path: "/" },
  ];

  return (
    
    <div className="">
      <div className="flex items-stretch justify-between rounded-md bg-gray-100 my-4 gap-1 sm:gap-3 md:gap-4 lg:gap-5 py-12">
        {iconsec2.map(({ id, icon: Icon, title, path }, index) => (
          <Link
            key={id}
            to={path}
            className={`flex-1 flex flex-col items-center justify-center p-2 sm:p-4 md:p-5 lg:p-6 text-center min-w-0 ${
              index !== iconsec2.length - 1 ? "border-r border-gray-300" : ""
            }`}
          >
            <Icon
              size={26}
              className="text-orange-500 mb-1 md:mb-1.5 lg:mb-2 shrink-0 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10"
            />
            <span className="text-xs leading-tight sm:text-sm md:text-[15px] lg:text-base break-words">
              {title}
            </span>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-between p-2 sm:p-4 md:p-5 lg:p-6 border-b border-gray-300">
        <h2 className="text-2xl">Yeniliklər</h2>
        <Link to="/products" className="flex items-center gap-2 hover:underline transition-all duration-300 text-blue-500 text-sm">
          Hamısına bax <FaArrowRightLong className="text-sm"/>
        </Link>
      </div>
    </div>
  );
}

export default Advantages;


