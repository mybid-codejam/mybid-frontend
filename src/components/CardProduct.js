import React from 'react';
import { NavLink } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';

export default function CardProduct({ product }) {
  return (
    <SwiperSlide className="product-container">
      <NavLink to={`product/${product.id}`}>
        <img src={product.images[0]} alt={`${product.name} images`} />
        <div className="product-detail">
          <p className="product-merek">{product.name}</p>
          <p className="product-harga">{product.base_price}</p>
          <p className="product-deadline">{product.ended_at}</p>
          <p className="product-lokasi">{product.lokasi}</p>
        </div>
      </NavLink>
    </SwiperSlide>
  );
}
