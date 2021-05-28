import React from 'react';
import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../styles/swiper.css';
import sliderImage from '../images/Group 390.png';

SwiperCore.use([Pagination]);

export default function slider() {
  return (
    <div className="slider">
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        spaceBetween={20}
        slidesPerView={1.3}
        pagination
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide tag="li">
          <img alt="image-slider" src={sliderImage} />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <img alt="image-slider" src={sliderImage} />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <img alt="image-slider" src={sliderImage} />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <img alt="image-slider" src={sliderImage} />
        </SwiperSlide>
        <SwiperSlide tag="li">
          <img alt="image-slider" src={sliderImage} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
