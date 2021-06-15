import { getAllItems } from '../app/swrReusable';
import AppLayout from '../components/layout/AppLayout';
import MyBidProfile from '../components/MybidProfile';
import Slider from '../features/slider';
import Products from '../components/Products';
import useInput from '../hooks/useInput';
import Spinner from '../features/spinner';
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
  const [provinsi, resetProvinsi, bindProvinsi] = useInput();
  const [kota, resetKota, bindKota] = useInput();
  const [hargaMin, resetHargaMin, bindHargaMin] = useInput();
  const [hargaMax, resetHargaMax, bindHargaMax] = useInput();
  if (isLoading) return <Spinner />;
  if (isError) return console.log(isError);
  const submitFilterHandler = (e) => {
    e.preventDefault();
    resetProvinsi();
    resetKota();
    resetHargaMin();
    resetHargaMax();
  };
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
              {...bindProvinsi}
            />
            <input
              type="text"
              className="input-lokasi"
              placeholder="Kota"
              {...bindKota}
            />
            <input
              type="number"
              className="input-lokasi"
              placeholder="Harga Minimum"
              {...bindHargaMin}
            />
            <input
              type="number"
              className="input-lokasi"
              placeholder="Harga Maksimum"
              {...bindHargaMax}
            />
          </div>
          <button
            className="filter-button"
            type="button"
            onClick={submitFilterHandler}
          >
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
