import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid';
import '../styles/features/filterDropdown.css';

const categories = [
  { name: 'Mobil' },
  { name: 'Motor' },
  { name: 'Elektronik' },
  { name: 'Bangunan' },
];

export default function filterDropdown() {
  const [selected, setSelected] = useState(categories[0]);

  const showingDropdown = () => {
    setIsShowing(!isShowing);
  };
  return (
    <div className="filter-dropdown w-32 order-3">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button
            onClick={showingDropdown}
            className="relative w-32 border border-secondary py-2 pl-3 pr-10 text-left bg-white rounded-lg shadow-md cursor-default focus:outline-none focus:ring-2 focus:ring-opacity-75 focus:ring-white sm:text-sm"
          >
            <span className="block truncate">{selected.name}</span>
            <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <SelectorIcon
                className="w-5 h-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Listbox.Options className="listbox-option">
            {categories.map((category, index) => (
              <Listbox.Option
                key={index}
                className={({ active }) =>
                  `${active ? 'text-blue-900 bg-blue-200' : 'text-gray-900'}
                          cursor-default select-none relative py-2 pl-10 pr-4`
                }
                value={category}
              >
                {({ selected, active }) => (
                  <>
                    <span
                      className={`${
                        selected ? 'font-medium' : 'font-normal'
                      } block truncate`}
                    >
                      {category.name}
                    </span>
                    {selected ? (
                      <span
                        className={`${
                          active ? 'text-blue-600' : 'text-blue-600'
                        }
                                absolute inset-y-0 left-0 flex items-center pl-3`}
                      >
                        <CheckIcon className="w-5 h-5" aria-hidden="true" />
                      </span>
                    ) : null}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
