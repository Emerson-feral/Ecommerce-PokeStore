/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart, loadCart, deleteProduct, decreaseProduct
} from '../../redux/actions/actionCreators';
import './style/Shopping-cart.css';

function ShoppingCart() {
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  return (
    <>
      {
          cart?.length
            ? (
              <div className="cartlist-container">
                <div className="cartlist-container__title">
                  <h2>Cart list</h2>
                </div>
                <div className="screen">
                  {
                cart.map((item) => (

                  <table className="products-container">
                    <tr>
                      <td className="products-container__item">{item.name}</td>
                      <td className="products-container__item">{item.price}</td>
                      <td className="products-container__item">{item.quantity}</td>
                      <td className="products-container__item">{ item.quantity * item.price}</td>
                      <td className="products-container__item"><button type="button" id={item._id} onClick={() => dispatch(addToCart(item))}>+</button></td>
                      <td className="products-container__item">
                        <button
                          type="button"
                          id={item._id}
                          onClick={() => {
                            if (item.quantity === 0) {
                              dispatch(deleteProduct(item));
                            } else {
                              dispatch(decreaseProduct(item));
                            }
                          }}
                        >
                          -
                        </button>

                      </td>
                      <td className="products-container__item"><button type="button" id={item._id} onClick={() => dispatch(deleteProduct(item))}>remove</button></td>
                    </tr>
                  </table>

                ))
                }
                </div>
              </div>
            )
            : (
              <div className="empty-container">
                <h2 className="empty-container__title">Empty cart</h2>
              </div>
            )
      }
    </>
  );
}

export default ShoppingCart;
