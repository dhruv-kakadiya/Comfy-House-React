import React, { useContext, useState, useEffect, useCallback } from 'react';
import data from './data';
//import reducer from './reducer';

//const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();
const deFaultState = {
  cart: [],
  amount: 0,
  total: 0.00
};

const AppProvider = ( {children} ) => {

  const [state,setState] = useState(deFaultState);
  const [isCartOpen,setIsCartOpen] = useState(false);

  const getCart = useCallback(() => {
    let cartArr = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];
    setState({...state, cart: cartArr});
  },[state]);

  const getTotal = useCallback( () => {
    let { totalAmount, totalPrice } = state.cart.reduce( (value,item) => {
      const {amount, price} = item;

      const itemTotal = amount * price;
      value.totalAmount += amount;
      value.totalPrice += itemTotal;
      return value;
    } , {
      totalAmount: 0,
      totalPrice: 0
    });

    totalPrice = parseFloat(totalPrice.toFixed(2));
    state.amount = totalAmount;
    state.total = totalPrice;
    setState(state);
  },[state]);

  const openCartBtn = () => {
    setIsCartOpen(true);
  }

  const closeCartBtn = () => {
    setIsCartOpen(false);
  }

  const clearAll = () => {
    setState({...state, cart:[] });
  }

  const removeItem = (id) => {
    const newCart = state.cart.filter( (item) => item.id !== id);
    setState({...state, cart: newCart});
  }

  const inc = (id) => {
    let newCart = state.cart.map( (item) => {
      if(item.id === id) {
        return { ...item, amount: item.amount + 1 }
      }
      return item;
    });
    setState({...state, cart: newCart});
  }

  const dec = (id) => {
    let newCart = state.cart.map( (item) => {
      if(item.id === id) {
        return { ...item, amount: item.amount - 1 }
      }
      return item;
    }).filter((item) => item.amount > 0);
    setState({...state, cart: newCart});
  }

  const addItemToCart = (id) => {
    let item = state.cart.find((item) => item.id === id);
    if(item) {
      item.amount += 1;
      setState(state); 
    } else {
      let product = data.find((item) => item.id === id);
      setState({...state, cart: [...state.cart, product] });
    }
  }

  const setCart = useCallback(() => {
    localStorage.setItem("cart" , JSON.stringify(state.cart));
  },[state]);

  useEffect(() => {
    getCart();
  },[getCart]);

  useEffect( () => {
    setCart();
    getTotal();
  },[state,getTotal,setCart]);


  return (
    <AppContext.Provider
      value={{
        ...state,
        openCartBtn,
        closeCartBtn,
        isCartOpen,
        addItemToCart,
        clearAll,
        data,
        removeItem,
        inc,
        dec
      }}
    >
      {children} 
    </AppContext.Provider>
  );
}


export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
