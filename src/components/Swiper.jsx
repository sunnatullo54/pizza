import { slideOne, slideTwo } from "../assets/data";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const MySwiper = () => {
    return (
        <Swiper
        width="100%"
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop
        breakpoints={{
          768: {
            slidesPerView: 2, 
          },
          480: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <img src={slideOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideTwo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideOne} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideTwo} alt="" />
        </SwiperSlide>
      </Swiper>
    )
}

export default MySwiper;