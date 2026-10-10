import { useContext } from "react";

import {
  FaCreditCard,
  FaHeadphonesSimple,
  FaAngleRight,
  FaMusic,
  FaRegObjectUngroup,
} from "react-icons/fa6";
import { FiWatch } from "react-icons/fi";
import { PiCarProfileThin } from "react-icons/pi";

import { DATA } from "../Context/Context";

import img1 from "../assets/carusel_1/imgi_4_204.jpg";
import img2 from "../assets/carusel_1/imgi_5_202.jpg";
import img3 from "../assets/carusel_1/imgi_6_194.jpg";
import img4 from "../assets/carusel_1/imgi_7_192.png";
import img5 from "../assets/carusel_1/imgi_8_190.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Home_Section1_r from "./Home_Section1_r";
import Advantages from "./Advantages";
import { Link } from "react-router-dom";

const images = [img1, img2, img3, img4, img5];

function Home_Section1() {
  const { menuItems } = useContext(DATA);
  const icons = {
    FaCreditCard,
    FaHeadphonesSimple,
    FiWatch,
    FaMusic,
    PiCarProfileThin,
    FaRegObjectUngroup,
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-stretch gap-4 lg:gap-6 w-full pt-[65px]">
        {/* sol menyu */}
        <div className="hidden md:block border rounded-md text-gray-500 w-full lg:w-[300px] lg:flex-shrink-0 overflow-hidden order-3 lg:order-1">
          <ul>
            {menuItems &&
              menuItems.map((item) => {
                const Icon = icons[item.icon];
                return (
                  <Link
                    to="/products"
                    key={item.id}
                    className="flex items-center justify-between gap-2 p-3 sm:p-4 border-b border-gray-300 cursor-pointer text-gray-700 hover:bg-gray-50"
                  >
                    <span
                      className={`flex items-center gap-2 sm:gap-3 text-base sm:text-xl min-w-0 ${
                        item.icon ? "" : "pl-9"
                      }`}
                    >
                      {Icon && <Icon className="text-lg sm:text-xl shrink-0" />}
                      <span className="hover:underline text-sm sm:text-base truncate">
                        {item.label}
                      </span>
                    </span>
                    {item.hasArrow && <FaAngleRight className="shrink-0" />}
                  </Link>
                );
              })}
          </ul>
        </div>

        {/* orta carusel */}
        <div className="w-full lg:flex-1 lg:min-w-0 order-1 lg:order-2">
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            loop
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={800}
            slidesPerView={1}
            className="rounded-md custom-swiper h-[220px] sm:h-[320px] md:h-[380px] lg:h-[420px] xl:h-[460px]"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="h-full">
                <img
                  className="w-full h-full object-cover rounded-md"
                  src={img}
                  alt=""
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* sag carusel */}
        <div className="w-full lg:w-[300px] lg:flex-shrink-0 rounded-lg order-2 lg:order-3">
          <Home_Section1_r />
        </div>
      </div>

      <Advantages />
    </>
  );
}

export default Home_Section1;
