const Reducer = (state,action) => {
  
  if(action.type === "SET_CART") {
    return {
      ...state,
      cart: action.cartArr
    }
  }

  if(action.type === "ADD") {
    const data = action.product;
    let item = state.cart.find((item) => item.id === action.itemId);
    if(item) {
      item.amount += 1;
      state.cart = [...state.cart, item];
      return state;
    }

    let product = data.find((item) => item.id === action.itemId);
    state.cart = [...state.cart, product];
    return state;
  }

  if(action.type === "CLEAR_ALL") {
    return {
      ...state, cart: []
    };
  }

  if(action.type === "LOADING") {
    return {
      ...state, loading: true
    }
  }

  if(action.type === "DISPLAY_ITEMS") {
    return {
      ...state, loading: false 
    }
  }

  if(action.type === "REMOVE") {
    const newCart = state.cart.filter( (item) => item.id !== action.id);
    return {
      ...state,
      cart: newCart
    }
  }

  if(action.type === "INC") {
    let newCart = state.cart.map( (item) => {
      if(item.id === action.id) {
        return { ...item, amount: item.amount + 1 }
      }
      return item;
    })
    return { ...state, cart: newCart }
  }

  if(action.type === "DEC") {
    let newCart = state.cart.map( (item) => {
      if(item.id === action.id) {
        return { ...item, amount: item.amount - 1 }
      }
      return item;
    }).filter((item) => item.amount > 0);
    return { ...state, cart: newCart }
  }

  if(action.type === "TOTAL") {
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

    return {
      ...state,
      amount: totalAmount,
      total: totalPrice
    };
  }

  return state;
};

export default Reducer;