import React from 'react';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon } from '@heroicons/react/solid';
import useInput from './inputFilter';
import '../styles/features/disclosure.css';
import '../styles/features/inputFilter.css';

export default function Example() {
  const products = [
    { name: 'Motor', isChecked: false },
    { name: 'Mobil', isChecked: false },
    { name: 'Elektronik', isChecked: false },
    { name: 'Bangunan', isChecked: false },
  ];
  const [hargaMinimum, resetMinimum, bindMinimum] = useInput('');
  const [hargaMaksimum, resetMaksimum, bindMaksimum] = useInput('');
  const [provinsi, resetProvinsi, bindProvinsi] = useInput('');
  const [kota, resetKota, bindKota] = useInput('');
  const checkedItem = (product) => {
    product.isChecked = !product.isChecked;
  };
  const submitHandler = (e) => {
    e.preventDefault();
    resetMinimum();
    resetMaksimum();
    resetProvinsi();
    resetKota();
  };

  return (
    <div className="w-full md:w-48">
      <div className="w-full max-w-md mx-auto bg-white rounded-2xl flex flex-col justify-between">
        <Disclosure as="div" className="mt-2" defaultOpen={true}>
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
                className="px-4 pt-4 pb-2 text-sm text-black flex flex-col"
                as="ul"
              >
                {products.map((product, index) => {
                  return (
                    <li key={index}>
                      <input
                        onClick={() => checkedItem(product)}
                        value={product.name}
                        type="checkbox"
                        className="h-4 w-4 text-blue-500 mr-2 rounded"
                      />
                      {product.name}
                    </li>
                  );
                })}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2" defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-button">
                <span>Harga</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 pb-2 text-xs text-black">
                <div className="input-wrapper">
                  <div className="flex flex-row -mr-px">
                    <span className="rupiah-icon">Rp</span>
                  </div>
                  <input
                    type="number"
                    className="input-filter"
                    placeholder="Harga minimum"
                    {...bindMinimum}
                  />
                </div>
                <div className="input-wrapper">
                  <div className="flex flex-row -mr-px">
                    <span className="rupiah-icon">Rp</span>
                  </div>
                  <input
                    type="number"
                    className="input-filter"
                    placeholder="Harga maksimum"
                    {...bindMaksimum}
                  />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <Disclosure as="div" className="mt-2" defaultOpen={true}>
          {({ open }) => (
            <>
              <Disclosure.Button className="disclosure-button">
                <span>Lokasi</span>
                <ChevronUpIcon
                  className={`${
                    open ? 'transform rotate-180' : ''
                  } w-5 h-5 black`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="pt-4 text-sm text-black">
                <div className="flex flex-col flex-wrap items-stretch w-full relative">
                  <input
                    type="text"
                    className="filter-lokasi"
                    placeholder="Provinsi"
                    {...bindProvinsi}
                  />
                  <input
                    type="text"
                    className="filter-lokasi"
                    placeholder="Kota"
                    {...bindKota}
                  />
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <button className="filter-button" type="button">
          Cari
        </button>
      </div>
    </div>
  );
}
