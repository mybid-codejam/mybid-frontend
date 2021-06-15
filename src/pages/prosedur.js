import React from 'react';
import AppLayout from '../components/layout/AppLayout';
import useDocumentTitle from '../hooks/useDocumentTitle';
import '../styles/pages/prosedur.css';

export default function Prosedur() {
  useDocumentTitle('Prosedur');

  return (
    <AppLayout>
      <section className="prosedur-text">
        <article className="text-1-4">
          <div className="text-per-number">
            <h2 className="number-text">1</h2>
            <div className="text-desc">
              <h6 className="text-title">
                Cari produk lelang di website Mybid
              </h6>
              <p>
                Cari produk lelang dan lihat jadwal penyelenggaraan lelang di
                website Mybid
              </p>
            </div>
          </div>
          <div className="text-per-number">
            <h2 className="number-text">2</h2>
            <div className="text-desc">
              <h6 className="text-title">
                Cari produk lelang di website Mybid
              </h6>
              <p>
                Cari produk lelang dan lihat jadwal penyelenggaraan lelang di
                website Mybid
              </p>
            </div>
          </div>
          <div className="text-per-number">
            <h2 className="number-text">3</h2>
            <div className="text-desc">
              <h6 className="text-title">Registrasi</h6>
              <p>
                Registrasi dengan melengkapi data diri anda di website atau di
                kantor Mybid
              </p>
            </div>
          </div>
          <div className="text-per-number">
            <h2 className="number-text">4</h2>
            <div className="text-desc">
              <h6 className="text-title">Beli nomor peserta lelang (NPL)</h6>
              <p>
                Anda dapat membeli NPL di website atau 2 hari sebelum lelang
                berlangsung di kantor Mybid
              </p>
            </div>
          </div>
        </article>
        <article className="text-5-8">
          <div className="text-per-number">
            <h2 className="number-text">5</h2>
            <div className="text-desc">
              <h6 className="text-title">Ikut lelang</h6>
              <p>
                Peserta Dapat melakukan penawaran saat mengikuti sesi lelang di
                kantor Mybid
              </p>
            </div>
          </div>
          <div className="text-per-number">
            <h2 className="number-text">6</h2>
            <div className="text-desc">
              <h6 className="text-title">Pelunasan</h6>
              <p>
                Bagi peserta lelang yang memenangkan lelang maka
                diharuskanpembayaran produk lelang paling lambat setelah 7 hari
                setelah lelang
              </p>
            </div>
          </div>
          <div className="text-per-number">
            <h2 className="number-text">7</h2>
            <div className="text-desc">
              <h6 className="text-title">Pengembalian</h6>
              <p>
                Bagi peserta yang kalah dalam mengikuti lelang maka pengembalian
                NPL deposit kembali 100% paling lambat 5 hari setelah mengikuti
                lelang
              </p>
            </div>
          </div>
          <div className="text-per-number">
            <h2 className="number-text">8</h2>
            <div className="text-desc">
              <h6 className="text-title">Pengambilan produk</h6>
              <p>
                Peserta yang memenangkan sesi lelang dapat mengambilproduk
                lelang beserta dokumennya setelah melunasi pembayaran paling
                lambat 7 hari setelah lelang
              </p>
            </div>
          </div>
        </article>
      </section>
    </AppLayout>
  );
}
