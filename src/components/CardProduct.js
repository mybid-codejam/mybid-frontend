import React from 'react';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import { LocationMarkerIcon, ClipboardIcon } from '@heroicons/react/outline';
import '../styles/components/productItem.css';

export default function CardProduct({ product }) {
  return (
    <NavLink to={`asset/${product.id}`}>
      <img
        src={product.thumb}
        alt={`${product.name} images`}
        className="product-image"
      />
      <div className="product-detail-wrapper">
        <p className="product-merek">{product.name}</p>
        <p className="product-harga">{product.basePriceDesc}</p>
        <p className="product-deadline">
          <ClipboardIcon className="h-5 w-5 mr-2 text-secondary" />
          {dayjs(product.endedAt).format('DD/MM/YYYY')}
        </p>
        <p className="product-lokasi">
          <LocationMarkerIcon className="h-5 w-5 mr-2 text-secondary" />
          {product.location}
        </p>
      </div>
    </NavLink>
  );
}
