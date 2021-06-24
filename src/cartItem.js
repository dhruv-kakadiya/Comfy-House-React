import React from 'react';
import { FaChevronUp , FaChevronDown } from 'react-icons/fa';
import { useGlobalContext } from './context';

const CartItem = ({ id, title, price, img, amount }) => {

  const { removeItem, inc, dec } = useGlobalContext();
  return (
    <div className="cart-product">
      <img src={img} alt={title} />
      <div className="product-details">
        <h4>{title}</h4>
        <h5>${price}</h5>
        <p className="remove-btn" onClick={() => removeItem(id)}>remove</p>
      </div>
      <div className="product-amount">
        <div onClick={() => inc(id)} ><FaChevronUp /></div>
        <p className="item-amount">{amount}</p>
        <div onClick={() => dec(id)} ><FaChevronDown /></div>
      </div>
    </div>
  );
};

export default CartItem;