import { useContext } from "react";
import { DATA } from "../Context/Context";
import Card from "../components/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Brandsec from "./Brandsec";

function Home_Section2() {
  const { user } = useContext(DATA);

  const filteredProducts = user ? user.filter(
    (item) => item.category === "Kompüter Aksesuarları"
  ) : [];
  return (
   <>
    <Swiper
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4"
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      breakpoints={{
        0: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
    >
      {filteredProducts.map((item, i) => (
        <SwiperSlide key={item.id || i}>
          <Card item={item} i={i} />
        </SwiperSlide>
      ))}
    </Swiper>
    <Brandsec/>
   </>
  );
}

export default Home_Section2