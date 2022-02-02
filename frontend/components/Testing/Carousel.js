// https://swiperjs.com/react#styles
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import {
  Navigation,
  Pagination,
  Autoplay,
  Scrollbar,
  A11y,
  Virtual,
  EffectFade,
  EffectCards,
  EffectCoverflow,
  EffectFlip,
  EffectCube,
  EffectCreative,
} from "swiper";
// import { EffectFade } from 'swiper';
// import "swiper/swiper-bundle.css";
// import "./styles.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const CarouselTest = () => {
  return (
    <div className="">
      <Swiper
        // install Swiper modules
        modules={[
          Navigation,
          Pagination,
          Scrollbar,
          Autoplay,
          A11y,
          EffectFade,
          EffectCards,
          EffectCoverflow,
          EffectFlip,
          EffectCube,
          EffectCreative,
        ]}
        effect="coverflow"
        slidesPerView={1}
        navigation
        autoplay={true}
        pagination={{ clickable: true }}
        // scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-01_cdca6597-97a6-45ef-ae6b-264bcd98c1ed.jpg?v=1566189048"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-02_e05e72fe-8a63-4a92-a257-856609c027ac.jpg?v=1566189060"
              className="w-full"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center items-center">
            <img
              src="https://cdn.shopify.com/s/files/1/0195/8916/9252/files/slider-01_cdca6597-97a6-45ef-ae6b-264bcd98c1ed.jpg?v=1566189048"
              className="w-full"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CarouselTest;
