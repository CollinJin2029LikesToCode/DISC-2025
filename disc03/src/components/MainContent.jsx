import React, { useState } from 'react';
import img1 from '../assets/1.jpeg';
import img2 from '../assets/2.jpeg';
import img3 from '../assets/3.jpeg';
import ProductCard from './ProductCard';

export default function MainContent() {
  const [total, setTotal] = useState(0);
  const addToCart = (amount) => setTotal((t) => t + amount);
  return (
    <main className="content">
      <div className="products">
        <ProductCard img={img1} price={2000} name="Product 1" addCart={addToCart} />
        <ProductCard img={img2} price={30} name="Product 2" addCart={addToCart} />
        <ProductCard img={img3} price={100} name="Product 3" addCart={addToCart} />
      </div>
      <p className="total-amount">Your Total is ${total}!</p>
    </main>
  );
}