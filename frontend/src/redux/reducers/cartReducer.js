/* eslint-disable no-return-assign */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-case-declarations */
import actionTypes from '../actions/actionTypes';

function cartReducer(cart = [], action) {
  let newCart = [...cart];
  switch (action.type) {
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
