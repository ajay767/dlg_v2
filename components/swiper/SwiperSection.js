import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";

SwiperCore.use([Navigation]);

import "swiper/css";
import "swiper/css/pagination";

// eslint-disable-next-line
import "swiper/css/bundle";

function SwiperSection({
  prevRef,
  nextRef,
  component: Component,
  data,
  className,
}) {
  return (
    <div className={`flex items-center justify-between  ${className}`}>
      <Swiper
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        slidesPerView={"auto"}
        spaceBetween={20}
        freeMode={true}
        className="mySwiper"
      >
        {data.map((curr, index) => (
          <SwiperSlide className="w-max" key={index}>
            <Component data={curr} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SwiperSection;
