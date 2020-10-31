import $ from 'jquery';
import { db } from './firebase';

export const initialState = {
  cart: [],
  user: null,
  q: ''
};

export const getTotal = (cart) => {
  return cart?.reduce((total, item) => total+item.price, 0);
}

export const getName = async (user, setName, fullName) => {
  if(user) {
    db.collection('users')
      .doc(user?.uid)
      .get()
      .then(doc => {
        fullName
        ? setName(doc?.data().name)
        : setName(doc?.data().name.split(" ").shift());
      })
  } else {
    return 'Guest';
  }
  
}

export const scrollToTop = () => $(window).scrollTop(0);

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD_TO_CART':
      return {...state, cart: [...state.cart, action.item]};
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex((item) => item.asin === action.asin);
      const newCart = [...state.cart]
      newCart.splice(index, 1);
      return {...state, cart: newCart}
    case 'EMPTY_CART':
      return {...state, cart: []}
    case 'SET_USER':
      return {...state, user: action.user};
    case 'SEARCH':
      return {...state, q: action.q}

    default:
      return state;
  }
}

export default reducer;