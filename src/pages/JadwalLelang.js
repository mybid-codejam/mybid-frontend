import React, { useState } from 'react';
import { filterAllParam, getCategory } from '../app/swrReusable';
import DatePicker from 'react-date-picker';
import { Disclosure } from '@headlessui/react';
import useInput from '../hooks/useInput';
import AppLayout from '../components/layout/AppLayout';
import Spinner from '../features/spinner';
import useDocumentTitle from '../hooks/useDocumentTitle';
import 'react-calendar/dist/Calendar.css';
import 'react-date-picker/dist/DatePicker.css';
import '../styles/features/react-calendar.css';
import '../styles/pages/jadwalLelang.css';
import {
  LocationMarkerIcon,
  ClipboardIcon,
  ChevronUpIcon,
  CheckIcon,
} from '@heroicons/react/outline';
import dayjs from 'dayjs';

export default function JadwalLelang() {
  useDocumentTitle('Jadwal Lelang');
  let endedAt;
  const [date, setDate] = useState(new Date());
  if (date !== null) {
    endedAt = dayjs(date.toISOString()).format('DD-MM-YYYY');
  }
  if (date === null) {
    endedAt = null;
  }
  const [hargaMinimum, resetMinimum, bindMinimum] = useInput();
  const [hargaMaksimum, resetMaksimum, bindMaksimum] = useInput();
  const [provinsi, resetProvinsi, bindProvinsi] = useInput('');
  const [kota, resetKota, bindKota] = useInput('');
  const [activeIndex, setActiveIndex] = useState(2);
  let { filAllData, filisLoading, filAllError } = filterAllParam(
    activeIndex,
    kota,
    provinsi,
    hargaMaksimum,
    hargaMinimum,
    endedAt,
  );
  const { categories, isLoading, isError } = getCategory();
  if (isLoading || filisLoading) return <Spinner />;
  if (filAllError || isLoading) return console.log(isError);
  console.log(endedAt, filAllData);

  return (
    <AppLayout>
      <section className="flex flex-col">
        <article className="flex flex-col md:flex-row justify-between items-center gap-y-4 my-4 md:px-4">
          <DatePicker
            value={date}
            onChange={setDate}
            format={'dd-M-y'}
            className="order-1"
          />
          <Disclosure as="div" className="w-48 order-3">
            {({ open }) => (
              <>
                <Disclosure.Button className="disclosure-button">
                  <span>Produk Lelang</span>
                  <ChevronUpIcon
                    className={`${
                      open ? 'transform rotate-180' : ''
                    } w-5 h-5 black`}
                  />
                </Disclosure.Button>
                <Disclosure.Panel
                  className="disclosure-panel-categories"
                  as="ul"
                >
                  {categories.data.map((category) => {
                    return (
                      <li
                        key={category.id}
                        value={category}
                        type="button"
                        className="cursor-pointer select-none relative py-2 pl-10 pr-4"
                        onClick={() => {
                          setActiveIndex(category.id);
                        }}
                      >
                        <span
                          className={`${
                            activeIndex === category.id
                              ? 'font-medium'
                              : 'font-normal'
                          } block truncate`}
                        >
                          {activeIndex === category.id ? (
                            <span className="text-blue-600 absolute inset-y-0 left-0 flex items-center pl-3">
                              <CheckIcon className="h-5 w-5" />
                            </span>
                          ) : null}
                          {category.name}
                        </span>
                      </li>
                    );
                  })}
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
          <Disclosure as="div" className="w-48 order-2">
            {({ open }) => (
              <>
                <Disclosure.Button className="flex flex-row justify-between w-full px-4 py-2 text-sm font-medium text-left text-black rounded-lg focus:outline-none border border-secondary">
                  <span>Lokasi</span>
                  <ChevronUpIcon
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
          {/* <button className="button-submit-filter" type="button">
            Cari
          </button> */}
        </article>
        <article className="min-h-screen">
          <h5 className="text-left text-2xl font-semibold px-4 mt-8">
            Hasil Pencarian
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-5 justify-items-center gap-12 my-4">
            {filAllData &&
              filAllData.data.map((product) => {
                return (
                  <div className="product-item" key={product.id}>
                    <img
                      className="product-image"
                      src={product.thumb}
                      alt="product-image"
                    />
                    <div className="product-item-detail">
                      <p className="product-item-name">{product.name}</p>
                      <p className="product-item-price">
                        {product.basePriceDesc}
                      </p>
                      <ul className="product-item-deadline-location">
                        <li className="product-item-deadline">
                          <ClipboardIcon className="h-5 w-5 text-secondary mr-2" />
                          <p>{dayjs(product.endedAt).format('DD MMM YYYY')}</p>
                        </li>
                        <li className="product-item-location">
                          <LocationMarkerIcon className="h-5 w-5 text-secondary mr-2" />
                          <p>{product.location}</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                );
              })}
          </div>
        </article>
      </section>
    </AppLayout>
  );
}
