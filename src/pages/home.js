import AppLayout from '../components/layout/AppLayout';
import { Counter } from '../features/counter/Counter';
import '../styles/home.css';
import objekImg from '../images/Rectangle 61.png';

export default function Home() {
  return (
    <AppLayout>
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
        </div>
      </section>
      <Counter />
    </AppLayout>
  );
}
