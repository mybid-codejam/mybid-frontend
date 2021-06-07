import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Product from './CardProduct';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import '../styles/components/productsList.css';

SwiperCore.use([Navigation]);

export default function Products({ title, products }) {
  return (
    <section className="produk-terlaris-wrapper">
      <h3 className="section-title">{title}</h3>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        spaceBetween={20}
        slidesPerView={'auto'}
        navigation={true}
      >
        {products &&
          products.map((product) => (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
}
