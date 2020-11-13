import React from 'react';
import data from './data';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import { BrowserRouter } from 'react-router-dom';

function App() {

  const openMenu= () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu= () => {
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
  <BrowserRouter>
    <div className="grid-container">
      <header className="header">
        <div className="brand">
          <button onClick={openMenu}>
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
        <button className="sidebar-close-button" onClick={closeMenu}>X</button>
        <ul>
          <li>
            <a href="https://www.amazon.com/FLIGHTLESS-Caleb-Saleh/dp/B08HGTJK57/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=&sr=">The Book</a>
          </li>
          <li>
            <a href="https://medium.com/@snsaleh11/the-birth-of-flightless-d800a0bc011">About the Book</a>
          </li>
        </ul>
      </aside>
      <main className="main">
        <div className="content">
          <Route path="/products/:id" component={ProductScreen} />
          <Route path="/" exact={true} component={HomeScreen} />
          
        </div>
    </main>
          <footer className="footer">
            All rights reserved.
    </footer>
        </div>
  </BrowserRouter>
  );
}

export default App;
