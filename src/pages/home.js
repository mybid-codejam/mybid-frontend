import AppLayout from '../components/layout/AppLayout';
import MyBidProfile from '../components/MybidProfile';
import Slider from '../features/slider';
import Products from '../components/Products';
import FilterDropdown from '../features/filterDropdown';
import '../styles/pages/home.css';
import objekImg from '../images/Rectangle 61.png';
import devicesImg from '../images/Devices.svg';
import houseImg from '../images/House.svg';
import carImg from '../images/Car.svg';
import motorImg from '../images/Motor.svg';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home() {
  const products = [
    {
      id: 1,
      name: 'Toyota Vios 2005 ',
      base_price: 'Rp 50.000.000',
      end_at: '7 Juni 2021',
      lokasi: 'Bandung ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 2,
      name: 'Toyota Vios 2012 ',
      base_price: 'Rp 55.000.000',
      end_at: '9 Juni 2021',
      lokasi: 'Bandung ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 3,
      name: 'Daihatsu Agya 2015 ',
      base_price: 'Rp 58.000.000',
      end_at: '9 Juni 2021',
      lokasi: 'Surabaya ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 4,
      name: 'Kawasaki Ninja 2015 ',
      base_price: 'Rp 30.000.000',
      end_at: '10 Juni 2021',
      lokasi: 'jakarta ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 5,
      name: 'Jeep 2015 ',
      base_price: 'Rp 200.000.000',
      end_at: '10 Juni 2021',
      lokasi: 'jakarta',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 6,
      name: 'Toyota Vios 2005 ',
      base_price: 'Rp 50.000.000',
      end_at: '7 Juni 2021',
      lokasi: 'Bandung ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 7,
      name: 'Toyota Vios 2012 ',
      base_price: 'Rp 55.000.000',
      end_at: '9 Juni 2021',
      lokasi: 'Bandung ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 8,
      name: 'Daihatsu Agya 2015 ',
      base_price: 'Rp 58.000.000',
      end_at: '9 Juni 2021',
      lokasi: 'Surabaya ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 9,
      name: 'Kawasaki Ninja 2015 ',
      base_price: 'Rp 30.000.000',
      end_at: '10 Juni 2021',
      lokasi: 'jakarta ',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
    {
      id: 10,
      name: 'Jeep 2015 ',
      base_price: 'Rp 200.000.000',
      end_at: '10 Juni 2021',
      lokasi: 'jakarta',
      images: [
        'https://storage.googleapis.com/mybid-e8958.appspot.com/1622353212304 - quick-response-code-indonesia-standard-qris-logo-F300D5EB32-seeklogo.com.png',
      ],
    },
  ];
  
  useDocumentTitle('Home');

  return (
    <AppLayout>
      <header>
        <Slider />
      </header>
      <section className="lelang-filter">
        <div className="jadwal-lelang">
          <h1 className="jadwal-title">Jadwal lelang terdekat</h1>
          <div className="jadwal-nav">
            <h2>Bangunan</h2>
            <h2>Mobil</h2>
            <h2>Motor</h2>
            <h2>Elektronik</h2>
          </div>
          <div className="jadwal-items">
            <div className="objek-lelang">
              <div className="detail-objek">
                <p className="tanggal-objek">3 Juni 2021</p>
                <p className="lokasi-objek">Bandung</p>
                <p className="deadline-objek">09.00</p>
              </div>
              <img src={objekImg} />
            </div>
          </div>
        </div>
        <div className="filter-items">
          <h1 className="filter-title">Sedang mencari lelang apa?</h1>
          <div className="filter-icons">
            <img src={carImg} alt="car image" />
            <img src={motorImg} alt="motor image" />
            <img src={devicesImg} alt="devices image" />
            <img src={houseImg} alt="house image" />
          </div>
          <div className="filter-harga">
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
            <FilterDropdown />
          </div>
          <button className="filter-button" type="button">
            Cari
          </button>
        </div>
      </section>
      <section className="produk-terlaris">
        <Products title="Produk Terlaris" products={products} />
      </section>
      <MyBidProfile />
    </AppLayout>
  );
}
