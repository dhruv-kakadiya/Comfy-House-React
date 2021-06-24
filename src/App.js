import React from 'react';
import './style.css';
import Navbar from './navbar';
import Header from './header';
import Products from './products';
import Cart from './cart';


function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Products />
      <Cart />
    </>
  );
}

export default App;
