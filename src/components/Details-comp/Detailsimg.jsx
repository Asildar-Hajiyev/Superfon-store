import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

export default function Detailsimg({ product }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const mainSwiperRef = useRef(null);

  const images =
    product.subImages && product.subImages.length > 0
      ? product.subImages
      : [product.image];

  const handleThumbClick = (index) => {
    if (!mainSwiperRef.current) return;

    if (mainSwiperRef.current.params.loop) {
      mainSwiperRef.current.slideToLoop(index);
    } else {
      mainSwiperRef.current.slideTo(index);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative mb-3 border border-gray-200 rounded-xl overflow-hidden">
        {product.isNew && (
          <span className="absolute top-3 left-3 z-10 bg-[#00b259] text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
            Yeni Məhsul
          </span>
        )}

        <Swiper
          onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          loop={images.length > 1}
          spaceBetween={10}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="w-full aspect-square bg-white"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="aspect-square flex items-center justify-center bg-white p-4">
                <img
                  src={img}
                  alt={`Şəkil ${index + 1}`}
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* Asagidaki sekiller hisse  */}
      {images.length > 1 && (
        <Swiper
          onSwiper={setThumbsSwiper}
          loop={false}
          spaceBetween={10}
          slidesPerView="auto"
          freeMode
          watchSlidesProgress
          modules={[FreeMode, Thumbs]}
        >
          {images.map((img, index) => (
            <SwiperSlide
              key={index}
              className="!w-[70px] cursor-pointer"
              onClick={() => handleThumbClick(index)}
            >
              <div className="border border-gray-200 rounded-lg overflow-hidden aspect-square p-2 bg-white">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}
