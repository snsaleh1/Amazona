import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu= () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu= () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onclick="openMenu()">
            &#9776;
            </button>
          <a href="index.html">The Floor Nest</a>
        </div>
        <div className="header-links">
          <a href="cart.html">Cart</a>
          <a href="signin.html">Sign In</a>
        </div>
      </header>
      <aside className="sidebar">
        <h3>Menu</h3>
        <button className="sidebar-close-button" onclick="closeMenu()">X</button>
        <ul>
          <li>
            <a href="index.html">The Book</a>
          </li>
          <li>
            <a href="https://medium.com/@snsaleh11/the-birth-of-flightless-d800a0bc011">About the Book</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <ul className="products">
            <li>
              <div className="product">
                <img className="product-image" src="images/d1.jpg" alt="product"></img>
                  <div className="product-name">
                    <a href="product.html">FLIGHTLESS By Caleb Saleh</a>
                  </div>
                  <div className="product-brand">Children's Picture Book</div>
                  <div className="product-price">$15</div>
                  <div className="product-rating">5.0 Stars (198 reviews)</div>
                    </div> 
                </li>
              <li>
                <div className="product">
                  <img className="product-image" src="images/d1.jpg" alt="product"></img>
                    <div className="product-name">
                      <a href="product.html">FLIGHTLESS By Caleb Saleh</a>
                    </div>
                    <div className="product-brand">Children's Picture Book</div>
                    <div className="product-price">$15</div>
                    <div className="product-rating">5.0 Stars (198 reviews)</div>
                    </div> 
                </li>
            </ul>
        </div>
    </main>
          <footer className="footer">
            All rights reserved.
    </footer>
        </div>
  );
}

export default App;
