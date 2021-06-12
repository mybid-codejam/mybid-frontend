import { getCategory, filterCategory } from '../app/swrReusable';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Navigation } from 'swiper/core';
import dayjs from 'dayjs';
import 'swiper/swiper.min.css';
import 'swiper/components/pagination/pagination.min.css';
import 'swiper/components/navigation/navigation.min.css';
import '../styles/components/boxJadwalLelang.css';

SwiperCore.use([Pagination, Navigation]);

export default function BoxJadwalLelang() {
  const [activeIndex, setActiveIndex] = useState(2);
  const { categories, isLoading, isError } = getCategory();
  const { categoryItem, filCatError } = filterCategory(activeIndex);
  if (isLoading) return <div>Loading...</div>;
  if (isError) return console.log(isError);
  if (filCatError) return console.log(filCatError);

  return (
    <div className="jadwal-lelang">
      <h1 className="jadwal-title">Jadwal lelang terdekat</h1>
      <div className="jadwal-nav">
        {categories &&
          categories.data.map((category, index) => {
            return (
              <h2
                key={index}
                className={
                  activeIndex === category.id ? 'navBox activeCat' : 'navBox'
                }
                onClick={() => {
                  setActiveIndex(category.id);
                  console.log(categoryItem);
                }}
              >
                {category.name}
              </h2>
            );
          })}
      </div>
      <Swiper
        id="main"
        tag="div"
        wrapperTag="ul"
        className="filterItem-list"
        navigation={true}
        spaceBetween={5}
        slidesPerView={2}
      >
        {categoryItem &&
          categoryItem.data.map((item) => {
            return (
              <SwiperSlide className="jadwal-items" key={item.id}>
                <NavLink className="objek-lelang" to={`asset/${item.id}`}>
                  <p className="objek-name">{item.name}</p>
                  <div className="detail-objek">
                    <p className="tanggal-objek">
                      {dayjs(item.endedAt).format('DD MMM YYYY')}
                    </p>
                    <p className="lokasi-objek">{item.location}</p>
                    <p className="deadline-objek">
                      {dayjs(item.endedAt).format('hh:mm')}
                    </p>
                  </div>
                </NavLink>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
}
