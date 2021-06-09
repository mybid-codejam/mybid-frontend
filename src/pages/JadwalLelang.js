import React, { useState } from 'react';
import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import { Disclosure } from '@headlessui/react';
import ChevronUpIcon from '../images/ChevronUp.svg';
import useInput from '../features/inputFilter';
import AppLayout from '../components/layout/AppLayout';
import FilterDropdown from '../features/filterDropdown';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '@wojtekmaj/react-daterange-picker/dist/entry.nostyle';
import 'react-calendar/dist/Calendar.css';
import '../styles/features/react-calendar.css';
import '../styles/pages/jadwalLelang.css';
import product1Img from '../images/product-sample.png';
import deadlineicon from '../images/deadline-icon.svg';
import mapIcon from '../images/map.svg';

export default function JadwalLelang() {
  useDocumentTitle('Jadwal Lelang');

  const products = [
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
  ];

  const [value, onChange] = useState([new Date(), new Date()]);
  const [provinsi, resetProvinsi, bindProvinsi] = useInput('');
  const [kota, resetKota, bindKota] = useInput('');

  return (
    <AppLayout>
      <section className="flex flex-col">
        <article className="flex flex-col md:flex-row justify-between items-center gap-y-4 my-4 md:px-4">
          <DateRangePicker
            value={value}
            onChange={onChange}
            className="order-1"
          />
          <FilterDropdown />
          <Disclosure as="div" className="w-48 order-2" defaultOpen={true}>
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row justify-between w-full px-4 py-2 text-sm font-medium text-left text-black rounded-lg focus:outline-none border border-secondary">
                  <span>Lokasi</span>
                  <img
                    src={ChevronUpIcon}
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel className="disclosure-panel-jadwal-lelang">
                  <div className="disclosure-input-wrapper">
                    <input
                      type="text"
                      className="input-lokasi"
                      placeholder="Provinsi"
                      {...bindProvinsi}
                    />
                    <input
                      type="text"
                      className="input-lokasi"
                      placeholder="Kota"
                      {...bindKota}
                    />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <button className="button-submit-filter" type="button">
            Cari
          </button>
        </article>
        <h5 className="text-left text-2xl font-semibold px-4 mt-8">
          Hasil Pencarian
        </h5>
        <article className="grid grid-cols-2 md:grid-cols-5 justify-items-center gap-12 my-4">
          {products &&
            products.map((product, index) => {
              return (
                <div className="product-item" key={index}>
                  <img
                    className="product-image"
                    src={product.img}
                    alt="product-image"
                  />
                  <div className="product-detail">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                    <ul className="product-deadline-location">
                      <li className="product-deadline">
                        <img src={deadlineicon} alt="deadline-icon" />
                        <p>{product.deadline}</p>
                      </li>
                      <li className="product-location">
                        <img src={mapIcon} alt="location-icon" />
                        <p>{product.location}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </article>
      </section>
    </AppLayout>
  );
}
