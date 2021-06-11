import React from 'react';
import { useParams } from 'react-router-dom';
import AppLayout from '../components/layout/AppLayout';
import CardNomorPesertLelang from '../components/CardNomorPesertaLelang';
import '../styles/pages/detailProduct.css';
import {
  ClipboardIcon,
  LocationMarkerIcon,
  PlusIcon,
} from '@heroicons/react/outline';
import productSample1 from '../images/product-sample1.svg';
import productSample2 from '../images/product-sample2.svg';
import productSample3 from '../images/product-sample3.svg';
import productSample4 from '../images/product-sample4.svg';
import productSample5 from '../images/product-sample5.svg';

export default function DetailProduct() {
  let { id } = useParams();
  return (
    <AppLayout>
      <section className="detail-product">
        <article className="image-galery">
          <img className="main-image" src={productSample1} />
          <div className="sub-images">
            <img className="image-1" src={productSample2} />
            <img className="image-2" src={productSample3} />
            <img className="image-3" src={productSample4} />
            <img className="image-4" src={productSample5} />
          </div>
        </article>
        <article className="product-spesification">
          <h4 className="product-title">Toyota Vios 2012</h4>
          <div className="product-lokasi-deadline">
            <div className="flex flex-row">
              <ClipboardIcon className="h-5 w-5 text-secondary mr-2" />
              <p>9 Juni 2021</p>
            </div>
            <div className="flex flex-row">
              <LocationMarkerIcon className="h-5 w-5 text-secondary mr-2" />
              <p>Bandung </p>
            </div>
          </div>
          <h3 className="product-price">Rp 55.000.000</h3>
          <div className="detail-dokumen">
            <h5 className="detail">Detail</h5>
            <h5 className="dokumen">Dokumen</h5>
          </div>
          <p className="text-sm">
            Model: Vios 2nd Gen Mesin: 1.5L 1NZ-FE DOHC VVT-i Konfigurasi: 4
            in-line cylinder, 16 valve Kapasitas bahan bakar : 42 Liter
            Transmisi: 5-speed M/T, 4-speed A/T
          </p>
          <button className="button-keranjang" type="button">
            <span className="text-lg flex flex-row align-middle justify-center">
              <PlusIcon className="h-5 w-5 mr-2 my-auto" />
              Keranjang
            </span>
          </button>
        </article>
        <CardNomorPesertLelang />
      </section>
    </AppLayout>
  );
}
