import React from 'react';
import '../styles/myBidProfile.css';
import icon1 from '../images/icon-profile2.svg';
import icon2 from '../images/icon-profile2.svg';
import icon3 from '../images/icon-profile3.svg';
import icon4 from '../images/icon-profile4.svg';

export default function MybidProfile() {
  return (
    <section className="section-wrapper">
      <h2 className="section-title">Kenapa memilih my bid?</h2>

      <div className="profile-wrapper">
        {/* profile 1*/}
        <div className="profile-point">
          <img
            className="profile-point-image"
            alt="profile-point-image"
            src={icon1}
          />
          <div className="profile-detail">
            <h5 className="detail-title">Produk Variatif</h5>
            <p>Produk tersedia di MyBid sangat bervariatif</p>
          </div>
        </div>
        {/* profile 2 */}
        <div className="profile-point">
          <img
            className="profile-point-image"
            alt="profile-point-image"
            src={icon2}
          />
          <div className="profile-detail">
            <h5 className="detail-title">Info Produk Transparan</h5>
            <p>
              Mybid memberikan informasi produk secara lengkap dan transparan
            </p>
          </div>
        </div>
        {/* profile 3 */}
        <div className="profile-point">
          <img
            className="profile-point-image"
            alt="profile-point-image"
            src={icon3}
          />
          <div className="profile-detail">
            <h5 className="detail-title">Transaksi Aman &amp; Mudah</h5>
            <p>Transaksi di Mybid aman dan mudah dengan menggunakan bank</p>
          </div>
        </div>
        {/* profile 4 */}
        <div className="profile-point">
          <img
            className="profile-point-image"
            alt="profile-point-image"
            src={icon4}
          />
          <div className="profile-detail">
            <h5 className="detail-title">Jaringan Luas</h5>
            <p>
              Mybid menyelenggarakan lelang di lebih dari 25 kota di seluruh
              Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
