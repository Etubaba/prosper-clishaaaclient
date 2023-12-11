// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import {
  Navigation,
  Scrollbar,
  A11y,
  Autoplay,
  EffectCube,
} from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
    //   modules={[Navigation, Autoplay, Scrollbar, A11y, EffectCube]}
    //   navigation={{
    //     prevEl: navigationPrevRefC.current,
    //     nextEl: navigationNextRefC.current,
    //   }}
    // onBeforeInit={(swiper) => {
    // swiper.params.navigation.prevEl = navigationPrevRefC.current;
    // swiper.params.navigation.nextEl = navigationNextRefC.current;
    // }}
    // onSlideChange={(index) => {}}
    // speed={1000}
    // spaceBetween={0}
    //   slidesPerView={1}
    // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className="Mrow">
        <div className="Mrow">
          <div className="desc">first</div>
        </div>
      </SwiperSlide>
      <SwiperSlide className="Mrow">
        <div className="Mrow">
          <div className="desc">second</div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
