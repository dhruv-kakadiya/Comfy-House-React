import React from 'react';
import { FaBars } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import logo from './images/logo.svg';
import { useGlobalContext } from './context';

function Navbar() {

  const { openCartBtn, amount } = useGlobalContext();
  return (
    <>
      <div className="navbar">
        <nav>
          <span className="nav-icon">
            <FaBars />
          </span>
          <img src={logo} alt="logo"/>
          <div className="cart-btns">
            <span className="nav-icon" onClick={openCartBtn} >
              <FaShoppingCart />
            </span>
            <div className="cart-number">{amount}</div>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;