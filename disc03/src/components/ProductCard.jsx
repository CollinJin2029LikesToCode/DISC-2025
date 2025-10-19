import React from 'react';

export default function ProductCard({ img, price, name, addCart }) {
  return (
    <div className="product">
      <div className="product-card">
        <img src={img} alt={name} className="product-img" />
        <h1>${price}</h1>
        <div className="product-body">
          <button className="btn btn-primary" onClick={() => addCart(price)}>Add to shopping cart</button>
        </div>
      </div>
    </div>
  );
}