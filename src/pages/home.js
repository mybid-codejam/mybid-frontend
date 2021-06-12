import { getAllItems } from '../app/swrReusable';
import AppLayout from '../components/layout/AppLayout';
import MyBidProfile from '../components/MybidProfile';
import Slider from '../features/slider';
import Products from '../components/Products';
import FilterDropdown from '../features/filterDropdown';
import '../styles/pages/home.css';
import BoxJadwalLelang from '../components/BoxJadwalLelang';
import devicesImg from '../images/Devices.svg';
import houseImg from '../images/House.svg';
import carImg from '../images/Car.svg';
import motorImg from '../images/Motor.svg';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home() {
  useDocumentTitle('Home');
  const { items, isLoading, isError } = getAllItems();
  if (isLoading) return <div>Loading...</div>;
  if (isError) return console.log(isError);

  return (
    <AppLayout>
      <header>
        <Slider />
      </header>
      <section className="lelang-filter">
        <BoxJadwalLelang />
        <div className="filter-items">
          <h1 className="filter-title">Sedang mencari lelang apa?</h1>
          <div className="filter-icons">
            <img src={carImg} alt="car image" />
            <img src={motorImg} alt="motor image" />
            <img src={devicesImg} alt="devices image" />
            <img src={houseImg} alt="house image" />
          </div>
          <div className="filter-harga">
            <input
              type="text"
              className="input-lokasi"
              placeholder="Provinsi"
            />
            <input type="text" className="input-lokasi" placeholder="Kota" />
            <input
              type="number"
              className="input-lokasi"
              placeholder="Harga Minimum"
            />
            <input
              type="number"
              className="input-lokasi"
              placeholder="Harga Maksimum"
            />
          </div>
          <button className="filter-button" type="button">
            Cari
          </button>
        </div>
      </section>
      <section className="produk-terlaris">
        <Products title="Produk Terlaris" products={items.data} />
      </section>
      <MyBidProfile />
    </AppLayout>
  );
}
