import React from 'react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';
import '../styles/features/swiper.css';
import sliderImage from '../images/Group 390.png';

SwiperCore.use([Pagination, Navigation]);

export default function slider() {
  return (
    <div className="slider">
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        spaceBetween={50}
        slidesPerView={1}
        pagination
        navigation={true}
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
