import React from 'react';
import CartItem from './cartItem';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Cart = () => {

  const { closeCartBtn, isCartOpen ,cart ,clearAll, total } = useGlobalContext();

  return (

    <div className={`${ isCartOpen ? "cart-overlay open" : "cart-overlay" }`}>
      <div className="space"></div>
      <div className="cart-content">
        <span className="close-btn" onClick={closeCartBtn} >
          <FaTimes />
        </span>
        <div className="title">your cart</div>
        <div className="cart-products">

          {cart.map((item) => {
            return <CartItem key={item.id} {...item} />
          })}

        </div>

        <div className="cart-footer">
          <h3>your total : $<span className="cart-total">{total}</span></h3>
          <button type="button" className="header-content-btn clear-cart-btn" onClick={clearAll} >clear all</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;