import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getItemById } from '../app/swrReusable';
import AppLayout from '../components/layout/AppLayout';
import CardNomorPesertLelang from '../components/CardNomorPesertaLelang';
import '../styles/pages/detailProduct.css';
import {
  ClipboardIcon,
  LocationMarkerIcon,
  PlusIcon,
} from '@heroicons/react/outline';

export default function DetailProduct() {
  const [activeIndex, setActiveIndex] = useState('Detail');
  let { id } = useParams();
  const { item, isLoading, isError } = getItemById(id);
  if (isLoading) return <div>loading</div>;
  if (isError) return console.log(isError);
  console.log(item.data);
  console.log(id);

  return (
    <AppLayout>
      <section className="detail-product">
        <article className="image-galery">
          <img className="main-image" src={item.data.images[0]} />
          <div className="sub-images">
            <img className="image-1" src={item.data.images[1]} />
            <img className="image-2" src={item.data.images[2]} />
            <img className="image-3" src={item.data.images[3]} />
            <img className="image-4" src={item.data.images[4]} />
          </div>
        </article>
        <article className="product-spesification">
          <h4 className="product-title">{item.data.name}</h4>
          <div className="product-lokasi-deadline">
            <div className="flex flex-row">
              <ClipboardIcon className="h-5 w-5 text-secondary mr-2" />
              <p>{item.data.endedAtDesc}</p>
            </div>
            <div className="flex flex-row">
              <LocationMarkerIcon className="h-5 w-5 text-secondary mr-2" />
              <p>{item.data.location}</p>
            </div>
          </div>
          <h3 className="product-price">{item.data.basePriceDesc}</h3>
          <div className="detail-dokumen">
            <h5
              onClick={() => setActiveIndex('Detail')}
              className={
                activeIndex === 'Detail' ? 'detail active-text' : 'detail'
              }
            >
              Detail
            </h5>
            <h5
              onClick={() => setActiveIndex('Dokumen')}
              className={
                activeIndex === 'Dokumen' ? 'dokumen active-text' : 'dokumen'
              }
            >
              Dokumen
            </h5>
          </div>
          <p className="text-sm">
            {activeIndex === 'Detail'
              ? item.data.description
              : item.data.document}
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
