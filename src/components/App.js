import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products'
import Cart from './Cart' 
import Shipping from './Shipping'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/shipping" element={<Shipping />} />
    </Routes>
  );
}

export default App;
