import AppLayout from '../components/layout/AppLayout';
import Slider from '../features/slider';
import Disclosure from '../features/discloruse';
import '../styles/pages/productLelang.css';
import product1Img from '../images/product-sample.png';
import deadlineicon from '../images/deadline-icon.svg';
import mapIcon from '../images/map.svg';

export default function products() {
  const products = [
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
    {
      img: product1Img,
      name: 'Ruko 9x10 meter',
      price: 'Rp 225.000.000',
      deadline: '20 Juni 2021',
      location: 'Bandung',
    },
  ];

  useDocumentTitle('Produk Lelang');

  return (
    <AppLayout>
      <header>
        <Slider />
      </header>
      <section className="products">
        <aside className="dropdown-filter">
          <h5 className="dropdown-title">Detail Produk</h5>
          <Disclosure />
        </aside>
        <article className="products-list">
          {products &&
            products.map((product, index) => {
              return (
                <div className="product-item" key={index}>
                  <img
                    className="product-image"
                    src={product.img}
                    alt="product-image"
                  />
                  <div className="product-detail">
                    <p className="product-name">{product.name}</p>
                    <p className="product-price">{product.price}</p>
                    <ul className="product-deadline-location">
                      <li className="product-deadline">
                        <img src={deadlineicon} alt="deadline-icon" />
                        <p>{product.deadline}</p>
                      </li>
                      <li className="product-location">
                        <img src={mapIcon} alt="location-icon" />
                        <p>{product.location}</p>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
        </article>
      </section>
    </AppLayout>
  );
}
