import React from 'react';
import data from '../data';

function HomeScreen (props) {
    return <ul className="products">
    {
      data.products.map(product => 
        <li>
      <div className="product">
        <img className="product-image" src={product.image} alt="product"></img>
          <div className="product-name">
            <a href="product.html">{product.name}</a>
          </div>
          <div className="product-brand">{product.brand}</div>
          <div className="product-price">{product.price}</div>
          <div className="product-rating">{product.rating} Stars ({product.numReviews})</div>
            </div> 
        </li>)
    }
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
}
export default HomeScreen;