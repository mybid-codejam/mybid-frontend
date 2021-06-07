import AppLayout from '../components/layout/AppLayout';
import MyBidProfile from '../components/MybidProfile';
import Slider from '../features/slider';
import { Counter } from '../features/counter/Counter';
import FilterDropdown from '../features/filterDropdown';
import '../styles/home.css';
import objekImg from '../images/Rectangle 61.png';
import devicesImg from '../images/Devices.svg';
import houseImg from '../images/House.svg';
import carImg from '../images/Car.svg';
import motorImg from '../images/Motor.svg';
import useDocumentTitle from '../hooks/useDocumentTitle';

export default function Home() {
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
      <MyBidProfile />
    </AppLayout>
  );
}
