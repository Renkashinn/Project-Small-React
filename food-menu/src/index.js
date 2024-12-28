import React from 'react';
import ReactDOM from 'react-dom';
import data from './data.js';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const style = {
    color: 'red',
    fontSize: '50px',
    textTransform: 'uppercase',
  };

  return <h1 style={style}>Warteg Mang Udin</h1>;
}

function Menu() {
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;

  return (
    <main className='menu'>
      <h2>Menu Kita</h2>
      {numFoods > 0 ? (
        <>
          <p>
            Aneka makanan Indonesia yang disajikan oleh wareteg mang uding
            sebagai pemenuhan manakan kesehatan yang diperlukan dalam kehidupan
            sehari-hari.
          </p>
          <ul className='foods'>
            {data.map((food) => (
              <Food
                foodObj={food}
                key={food.nama}
              />
            ))}
          </ul>
        </>
      ) : (
        <p>Kosong, gan. Besok dateng lagi.</p>
      )}
      {/* {<Food
        nama='Nasi Goreng'
        deskripsi='Nasi yang digoreng dengan bumbu rempah khas Indonesia'
        harga={25000}
        foto='food/nasi-goreng.jpg'
        stok={Math.random() >= 0.5 ? true : false}
      />
      <Food
        nama='Sate Ayam'
        deskripsi='Sate ayam yang ditusuk dan dibakar, disajikan dengan bumbu kacang'
        harga={15000}
        foto='food/sate-ayam.jpg'
        stok={Math.random() >= 0.5 ? true : false}
      />} */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 12;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  if (isOpen) {
    return (
      <FooterOpenHour
        jamBuka={jamBuka}
        jamTutup={jamTutup}
      />
    );
  } else {
    return (
      <FooterClosedHour
        jamBuka={jamBuka}
        jamTutup={jamTutup}
      />
    );
  }
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className='footer'>
      <div className='order'>
        <p>
          {new Date().getFullYear()} Warteg Mang Udin | jam buka {jamBuka} - jam
          tutup {jamTutup}
        </p>
        <button className='btn'>Order</button>
      </div>
    </footer>
  );
}

function FooterClosedHour({ jamBuka, jamTutup }) {
  return (
    <p>
      Maaf gan masih tutup. Coba dateng lagi sekitar jam {jamBuka} - {jamTutup}.
    </p>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;

  return (
    <li className={`food ${!stok ? 'sold-out' : ''}`}>
      <img
        src={foto}
        alt={nama}
        width={100}
        height={70}
      />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <span>{stok ? harga : 'Habis'}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
