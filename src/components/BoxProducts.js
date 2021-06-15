import React from 'react';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import '../styles/components/BoxProducts.css';
import { LocationMarkerIcon, ClipboardIcon } from '@heroicons/react/outline';

export default function BoxProducts({ products }) {
  return (
    <div className="products-list">
      {products &&
        products.data.map((product) => {
          console.log(product);
          return (
            <div className="product-item" key={product.id}>
              <NavLink to={`asset/${product.id}`}>
                <img
                  className="product-image"
                  src={product.thumb}
                  alt="product-image"
                />
                <div className="product-item-detail">
                  <p className="product-item-name">{product.name}</p>
                  <p className="product-item-price">{product.basePriceDesc}</p>
                  <ul className="product-item-deadline-location">
                    <li className="product-item-deadline">
                      <ClipboardIcon className="w-5 h-5 text-secondary mr-2" />
                      <p>{dayjs(product.endedAt).format('DD MMM YYYY')}</p>
                    </li>
                    <li className="product-item-location">
                      <LocationMarkerIcon className="w-5 h-5 text-secondary mr-2" />
                      <p>{product.location}</p>
                    </li>
                  </ul>
                </div>
              </NavLink>
            </div>
          );
        })}
    </div>
  );
}
