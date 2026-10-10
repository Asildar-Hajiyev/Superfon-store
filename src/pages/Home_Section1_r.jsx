import { useContext, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { BASKET, DATA } from "../Context/Context";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

import { CiShoppingCart } from "react-icons/ci";

function Home_Section1_r() {
  const { user } = useContext(DATA);
  const endDate = new Date("2026-09-09T00:00:00");
  const [timeLeft, setTimeLeft] = useState(endDate - new Date());

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(endDate - new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const d = Math.max(timeLeft, 0);
  const days = Math.floor(d / 86400000);
  const hours = Math.floor((d / 3600000) % 24);
  const minutes = Math.floor((d / 60000) % 60);

  const pad = (num) => String(num).padStart(2, "0");

  const saleItems = user.filter((item) => item.onSale);
  const {addBasket} = useContext(BASKET)
  return (
    <div className="rounded-md lg:bg-gray-100 p-4 border border-gray-300 lg:border-none lg:p-6 w-full lg:h-[350px] overflow-y-auto lg:h-auto lg:overflow-visible lg:w-[300px] lg:max-w-none lg:mx-0">
      <div className="flex items-center justify-between lg:flex-col sm:flex-row lg:flex-col gap-2  p-2 sm:p-4 lg:border-none border-b border-gray-300">
        <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-gray-800">
          Həftənin təklifləri
        </h2>
        <div className="flex items-center gap-1.5 sm:gap-2">
          <div className="flex flex-col items-center min-w-[36px] sm:min-w-[50px] border-r lg:border-gray-300 border-green-500 pr-1.5 sm:pr-0">
            <span className="text-xs sm:text-sm lg:text-2xl font-bold lg:text-orange-500 text-green-500">
              {pad(days)}
            </span>
            <span className="text-[9px] sm:text-xs text-gray-500">gün</span>
          </div>
          <div className="flex flex-col items-center min-w-[36px] sm:min-w-[50px] border-r lg:border-gray-300 border-green-500 pr-1.5 sm:pr-0">
            <span className="text-xs sm:text-sm lg:text-2xl font-bold lg:text-orange-500 text-green-500">
              {pad(hours)}
            </span>
            <span className="text-[9px] sm:text-xs text-gray-500">saat</span>
          </div>
          <div className="flex flex-col items-center min-w-[36px] sm:min-w-[50px] border-r lg:border-gray-300 border-green-500 pr-1.5 sm:pr-0">
            <span className="text-xs sm:text-sm lg:text-2xl font-bold lg:text-orange-500 text-green-500">
              {pad(minutes)}
            </span>
            <span className="text-[9px] sm:text-xs text-gray-500">dəqiqə</span>
          </div>
        </div>
      </div>
      <div className="w-full rounded-md custom-swiper-sale">
        <Swiper
          modules={[Autoplay]}
          loop={saleItems.length > 2}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            480: { slidesPerView: 1 },
            1024: { slidesPerView: 1 },
          }}
          className="rounded-md custom-swiper-sale"
        >
          {user
            .filter((item) => item.onSale)
            .map((item) => (
              <SwiperSlide
                className="flex flex-row lg:flex-col items-center gap-2 lg:gap-0 bg-white border-gray-200 rounded-lg p-2 sm:p-3 lg:p-4 shadow-sm hover:shadow-md transition-shadow duration-300"
                key={item.id}
              >
                <div className="flex items-center gap-4 lg:flex-col">
                  <Link to={`/details/${item.id}`} className="block w-[80px] lg:w-[120px] aspect-square overflow-hidden rounded-md bg-gray-50 flex-shrink-0">
                    <img
                      className="w-full h-full object-cover"
                      src={item.image}
                      alt={item.title}
                    />
                  </Link>

                  <div className="flex flex-col items-start lg:items-center flex-1 lg:w-full lg:mt-3">
                    <div className="text-left lg:text-center text-sm sm:text-base text-gray-700 font-medium">
                      <Link to={`/details/${item.id}`} className=" hidden lg:inline">
                        {item.title.slice(0, 15)}...
                      </Link>
                      <Link to={`/details/${item.id}`} className="lg:hidden">
                        {item.title.slice(0, 50)}...
                      </Link>
                     
                    </div>
                    <div className="text-left lg:text-center text-xs sm:text-base text-gray-700 font-medium">
                      Endirimli qiymət: {item.price} ₼
                    </div>

                    <button className="flex items-center justify-center gap-1.5 sm:gap-2 bg-gray-200 hover:bg-gray-300 lg:bg-green-600 lg:hover:bg-green-700 lg:text-white text-xs sm:text-sm px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-md transition-all duration-300 cursor-pointer mt-2 sm:mt-3 w-fit lg:w-full">
                      <CiShoppingCart className="text-base sm:text-lg" />
                      <span onClick={()=>addBasket(item.id,item.image,item.title,item.price)} className="whitespace-nowrap hidden lg:flex">Səbətə əlavə et</span>
                      <span onClick={()=>addBasket(item.id,item.image,item.title,item.price)} className="whitespace-nowrap flex lg:hidden">Səbətə at</span>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
      <Link
        className="hidden lg:block text-center w-full hover:underline transition-all duration-150 mt-2 "
        to="/products"
      >
        Bütün təkliflərə bax
      </Link>
    </div>
  );
}

export default Home_Section1_r;
