import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowRightLong } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

function Brandsec() {

  const user3 = [ { id: 1, title: "euroacs", image: "https://cdn.superfon.az/i/b/icon/30-5611ba3b07f5fefcabdb1c22338e1b3d.png" },
  { id: 2, title: "joyroom", image: "https://cdn.superfon.az/i/b/icon/4-80132eea8fd8e7df7c930749bb044244.png" },
  { id: 3, title: "foni", image: "https://cdn.superfon.az/i/b/icon/46-ca002cdb01166ae0b2e5a97b856269f0.png" },
  { id: 4, title: "phtaka", image: "https://cdn.superfon.az/i/b/icon/new-5324df4492da5b615977524943c66123.png" },
  { id: 5, title: "ackiliss", image: "https://cdn.superfon.az/i/b/icon/93-31ee53813a627c7393d831c83a44486b.png" },
  { id: 6, title: "honor", image: "https://cdn.superfon.az/i/b/icon/10-fdc20d6871bce946011e634099c28698.png" },
  { id: 7, title: "samsung", image: "https://cdn.superfon.az/i/b/icon/2-6d7eb24b9bbf2c120234ecd5421b3914.png" },
  { id: 8, title: "goldmaster", image: "https://cdn.superfon.az/i/b/icon/53-c8dd65a432742b912277876fb92d0921.png" },
  { id: 9, title: "aspor", image: "https://cdn.superfon.az/i/b/icon/24-a063f970a46612fc26d1ea678938af57.png" },
  { id: 10, title: "oppo", image: "https://cdn.superfon.az/i/b/icon/75-8e471fe2ac3c904d9c2eea24373af212.png" },
  { id: 11, title: "plokama", image: "https://cdn.superfon.az/i/b/icon/97-afdabec7804a272b203bc3955154e4c6.png" },
  { id: 13, title: "apple", image: "https://cdn.superfon.az/i/b/icon/1-de766b3876f64c300e39b79e5e87805a.png" },
  { id: 14, title: "mi", image: "https://cdn.superfon.az/i/b/icon/3-394d171b5c4639263e5b11bcdf3f0104.png" },
]

  return (
    <>
     {/* logo hisse */}
      <div className="flex items-center justify-between p-4 md:p-5 lg:p-6 border-b border-gray-300 mb-6">
        <h2 className="text-xl sm:text-2xl font-semibold">Yeniliklər</h2>
        <Link 
          to="/products" 
          className="flex items-center gap-2 hover:underline transition-all duration-300 text-blue-500 text-xs sm:text-sm whitespace-nowrap"
        >
          Hamısına bax <FaArrowRightLong className="text-xs sm:text-sm"/>
        </Link>
      </div>

      
      <div className="w-full px-4 md:px-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={16}
        
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10 }, 
            480: { slidesPerView: 3, spaceBetween: 15 }, 
            768: { slidesPerView: 4, spaceBetween: 20 }, 
            1024: { slidesPerView: 5, spaceBetween: 20 },
          }}
          className="w-full"
        >
          {user3.map((item) => (
            <SwiperSlide key={item.id}>
              <Link 
                to="/" 
                className="bg-white border border-gray-100 rounded-lg p-3 sm:p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-300 h-24 sm:h-28"
              >
                <img
                  src={item.image}
                  alt={item.name || "brand"} 
                  className="w-full h-full object-contain max-h-16 sm:max-h-20"
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}

export default Brandsec;