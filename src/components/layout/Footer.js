import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../../styles/layout/footer.css';
import facebookImg from '../../images/facebook-icon.svg';
import instaImg from '../../images/instagram-icon.svg';
import twitterImg from '../../images/twitter-icon.svg';
import mapImg from '../../images/map.svg';
import phoneImg from '../../images/phone.svg';
import clockImg from '../../images/clock.svg';
import emailImg from '../../images/email.svg';

export default function Footer() {
  return (
    <footer>
      <div className="footer-detail">
        <div className="customer-service">
          <h5>Customer Service</h5>
          <ul className="custom-service-list">
            <li>
              <img src={mapImg} alt="social-media-icon" />
              <p>
                Jalan Sriwijaya No 12, Padjajaran, <br /> Kota Bandung, Jawa
                Barat Indonesia
              </p>
            </li>
            <li>
              <img src={phoneImg} alt="social-media-icon" />
              <p>(021) 87624513</p>
            </li>
            <li>
              <img src={clockImg} alt="social-media-icon" />
              <p>Senin - Jumat 08.00 - 16.00</p>
            </li>
            <li>
              <img src={emailImg} alt="social-media-icon" />
              <p>cs@mybid.id</p>
            </li>
          </ul>
        </div>
        <div className="myBid-indonesia">
          <h5>Mybid Indonesia</h5>
          <ul>
            <li>Tentang Mybid</li>
            <li>Info Mybid</li>
            <li>Lokasi lelang</li>
            <li>Jadwal lelang</li>
            <li>Karir</li>
            <li>Kontak</li>
          </ul>
        </div>
        <div className="layanan">
          <h5>Layanan</h5>
          <ul>
            <li>Cari Objek Lelang</li>
            <li>Jadwal Lelang</li>
            <li>Terms & condition</li>
            <li>Info penting</li>
          </ul>
        </div>
        <div className="ikuti-kami">
          <h5>Ikuti kami</h5>
          <div className="social-media-img">
            <img src={facebookImg} alt="social media image" />
            <img src={instaImg} alt="social media image" />
            <img src={twitterImg} alt="social media image" />
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        &copy; 2021 Mybid Indonesia All rights reserved
      </div>
    </footer>
  );
}
