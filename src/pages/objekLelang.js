import { useState, useEffect } from 'react';
import AppLayout from '../components/layout/AppLayout';
import Slider from '../features/slider';
import BoxProducts from '../components/BoxProducts';
import { Disclosure } from '@headlessui/react';
import { ChevronUpIcon, CheckIcon } from '@heroicons/react/solid';
import useInput from '../hooks/useInput';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../styles/features/disclosure.css';
import '../styles/features/inputFilter.css';
import '../styles/pages/objekLelang.css';
import { filterAllParam, getCategory } from '../app/swrReusable';
import Spinner from '../features/spinner';

export default function ObjekLelang() {
  useDocumentTitle('Produk Lelang');
  const [hargaMinimum, resetMinimum, bindMinimum] = useInput();
  const [hargaMaksimum, resetMaksimum, bindMaksimum] = useInput();
  const [provinsi, resetProvinsi, bindProvinsi] = useInput();
  const [kota, resetKota, bindKota] = useInput();
  const [activeIndex, setActiveIndex] = useState(2);
  const [endedAt, resetEndedAt, bindEndedAt] = useInput();
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
  console.log(filAllData);
  return (
    <AppLayout>
      <header>
        <Slider />
      </header>
      <section className="products">
        <aside className="dropdown-filter">
          <h5 className="dropdown-title">Detail Produk</h5>
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
              {/* <button
                className="filter-button"
                type="button"
                onClick={(e) => submitHandler(e)}
              >
                Cari
              </button> */}
            </div>
          </div>
        </aside>
        <div className="products-box">
          {filAllData && filAllData.data.length === 0 ? (
            <h5 className="font-semibold text-lg flex items-center justify-center h-full w-full">
              Produk kosong
            </h5>
          ) : (
            <BoxProducts products={filAllData} />
          )}
        </div>
      </section>
    </AppLayout>
  );
}
