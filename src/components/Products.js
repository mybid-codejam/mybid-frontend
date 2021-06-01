import React from 'react';
import { Swiper } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Product from './CardProduct';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';

SwiperCore.use([Navigation]);

export default function Products(title, { products }) {
  return (
    <section className="products-list">
      <h3 className="section-title">{title}</h3>
      <Swiper
        id="main"
        tag="section"
        wrapperTag="ul"
        spaceBetween={5}
        slidesPerView={5.2}
        navigation
      >
        {products &&
          products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
      </Swiper>
    </section>
  );
}
