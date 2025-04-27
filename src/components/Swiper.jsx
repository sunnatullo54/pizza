import { slideOne, slideTwo } from "../assets/data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const MySwiper = () => {
  return (
    <div className="container"> 
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={2}
        navigation
        loop
        breakpoints={{
          0: {
            slidesPerView: 1,  
          },
          768: {
            slidesPerView: 2,   
          },
        }}
      >
        <SwiperSlide>
          <img src={slideOne} alt="Slide 1" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideTwo} alt="Slide 2" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideOne} alt="Slide 3" className="w-full h-auto object-cover" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slideTwo} alt="Slide 4" className="w-full h-auto object-cover" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MySwiper;
