import React from 'react';
import { NavLink } from 'react-router-dom';
import { LocationMarkerIcon, CalendarIcon } from '@heroicons/react/outline';
import '../styles/components/productItem.css';

export default function CardProduct({ product }) {
  return (
    <NavLink to={`product/${product.id}`}>
      <img
        src={product.images[0]}
        alt={`${product.name} images`}
        className="product-image"
      />
      <div className="product-detail-wrapper">
        <p className="product-merek">{product.name}</p>
        <p className="product-harga">{product.base_price}</p>
        <p className="product-deadline">
          <CalendarIcon className="h-4 w-4 mr-2" />
          {product.end_at}
        </p>
        <p className="product-lokasi">
          <LocationMarkerIcon className="h-4 w-4 mr-2" />
          {product.lokasi}
        </p>
      </div>
    </NavLink>
  );
}
