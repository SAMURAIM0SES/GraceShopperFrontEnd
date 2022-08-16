import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Shipping from './Shipping';
import Register from './Register';
import CategoryProducts from './CategoryProducts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/category/:categoryId" element={<CategoryProducts />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/register" element={<Register />} />
      <Route path="/shipping" element={<Shipping />} />
    </Routes>
  );
}

export default App;
