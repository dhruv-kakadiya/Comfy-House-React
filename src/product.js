import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { useGlobalContext } from './context';

const Product = ({ id, title, price, img}) => {
  const { addItemToCart } = useGlobalContext();
  return (
    <div className="product">
      <div className="img-container">
        <img src={img} alt={title} />
          <button className="cart-btn" type="button" onClick={()=> addItemToCart(id)}>
            <FaShoppingCart /> add to cart
          </button>
      </div>
      <h4>{title}</h4>
      <p>${price}</p>
    </div>
  );
};

export default Product;