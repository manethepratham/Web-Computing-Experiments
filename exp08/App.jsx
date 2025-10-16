import React from 'react';
import './App.css';
import img1 from './assets/img1.jpg';
import img2 from './assets/img2.jpg';
import img3 from './assets/img3.jpg';
import img4 from './assets/img4.jpg';
import img5 from './assets/img5.jpg';
import img6 from './assets/img6.jpg';
import img7 from './assets/img7.jpg';

function App() {
  const bestSellers = [
    { id: 1, img: img2, title: 'The Price of Money', price: '$19.99' },
    { id: 2, img: img3, title: 'Circus Erin Morgenstern', price: '$19.99' },
    { id: 3, img: img4, title: 'A River Runs Back', price: '$159.99' },
    { id: 4, img: img5, title: 'The Alchemist', price: '$199.99' },
    { id: 5, img: img6, title: 'The Vegetarian Han Kang', price: '$299.99' },
    { id: 6, img: img7, title: 'Harry Potter and the Philosopher\'s stone', price: '$29.99' },
  ];

  return (
    <div className="App">
      <header>
        <h1 className="header-title">Bookline: Online Book Store</h1>
        <form className="search-form" action="search-results.html" method="get">
          <label htmlFor="search-input" className="sr-only">Search for books</label>
          <input type="text" id="search-input" placeholder="Search books..." name="query" />
          <button type="submit" aria-label="Search"><i className="fa fa-search"></i> Search</button>
        </form>
        <nav>
          <a className="contact-link" href="contact.html">Contact Us</a>
        </nav>
      </header>

      <main>
        <section className="hero-section">
          <img src={img1} alt="A stack of diverse books" className="hero-image" />
          <div className="hero-text-overlay">
            <h1>Bookline</h1>
            <p>Your one-stop shop for online book reading and purchases.</p>
          </div>
        </section>

        <section>
          <h2 className="section-heading">Best Sellers</h2>
          <div className="products-grid">
            {bestSellers.map(product => (
              <div className="product-card" key={product.id}>
                <img src={product.img} alt={`Book cover: ${product.title}`} />
                <h2>{product.title}</h2>
                <p className="price">{product.price}</p>
                <button>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2023 BOOK: Online Book Store. All rights reserved. Created by 23DS30</p>
      </footer>
    </div>
  );
}

export default App;