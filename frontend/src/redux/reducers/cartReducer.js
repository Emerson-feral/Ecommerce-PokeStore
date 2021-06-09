/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

function cartReducer(cart = [], action) {
  let newCart = [...cart];
  switch (action.type) {
    case actionTypes.DELETE_PRODUCT:
      newCart = cart.filter((item) => item._id !== action.product._id);
      break;

    case actionTypes.DECREASE_PRODUCT:
      const itemDecreased = newCart.find(({ _id }) => action.product._id === _id);
      if (itemDecreased) {
        newCart.map(
          (product) => (action.product._id === product._id
            ? { ...product, quantity: itemDecreased.quantity -= 1 }
            : product)
        );
      }
      break;
    case actionTypes.ADD_PRODUCT_CART:
      let productToAdd;
      const item = newCart
        .find(({ _id }) => action.product._id === _id);

      if (item) {
        newCart = newCart.map(
          (product) => (action.product._id === product._id
            ? { ...product, quantity: item.quantity += 1 }
            : product)
        );
      } else {
        productToAdd = { ...action.product, quantity: 1 };
        newCart = [...newCart, productToAdd];
      }
      break;
    default:
      return cart;
  }
  return newCart;
}

export default cartReducer;
