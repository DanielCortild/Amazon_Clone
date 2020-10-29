export const initialState = {
  cart: [],
  user: null,
  q: ''
};

export const getTotal = (cart) => {
  return cart?.reduce((total, item) => total+item.price, 0);
}

export default (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, action.item]};
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex((item) => item.asin === action.asin);
      let newBasket = [...state.cart];
      if (index >= 0) {newBasket.splice(index, 1);} 
      return {
        ...state,
        cart: newBasket
      }
      // const index = state.cart.findIndex(item => item.asin === action.asin);
      // return {...state, cart: state.cart.splice(index, 1)};
    case 'SET_USER':
      return {...state, user: action.user};
    case 'SEARCH':
      return {...state, q: action.q}

    default:
      return state;
  }
}