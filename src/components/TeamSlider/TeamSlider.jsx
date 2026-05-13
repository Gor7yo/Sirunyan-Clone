import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { useRef, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./TeamSwiper.css";

export const TeamSlider = ({ team }) => {
  const swiperRef = useRef(null);
  const [isLastSlide, setIsLastSlide] = useState(false);

  return (
    <div className="team-swiper">
      <div className="team-swiper__title-block">
        <span className="team-swiper__title">Out Team</span>
      </div>
      <div className="swiper-block">
        <Swiper
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5.5}
          ref={swiperRef}
          onReachEnd={() => setIsLastSlide(true)}
          onReachBeginning={() => setIsLastSlide(false)}
        >
          {team.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="title-block">
                <span className="name">{slide.name}</span>
                <span className="rank">{slide.rank}</span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="custom-navs">
          <button
            className={`custom-nav prev ${!isLastSlide ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.swiper.slidePrev()}
          >
            <FaArrowLeft />
          </button>
          <button
            className={`custom-nav btn-next ${isLastSlide ? "disabled" : ""}`}
            onClick={() => swiperRef.current?.swiper.slideNext()}
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};
