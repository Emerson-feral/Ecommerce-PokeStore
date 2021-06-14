/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  addToCart, loadCart, deleteProduct, decreaseProduct
} from '../../redux/actions/actionCreators';
import './style/Shopping-cart.css';

function ShoppingCart() {
  const history = useHistory();
  const dispatch = useDispatch();
  const cart = useSelector((store) => store.cart);
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(loadCart());
  }, []);

  useEffect(() => {
    if (!user.token)history.push('/login');
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
                  <ul className="products-container">

                    <li className="products-container__item">
                      <img className="products-container__image" src={item.avatarImage} alt={item.name} />
                      <p className="products-container__text">
                        { `Name: ${item.name} 
                        Price: ${item.price * item.quantity}`}
                      </p>

                      <button
                        className="products-container__button"
                        type="button"
                        id={item._id}
                        onClick={() => dispatch(addToCart(item))}
                      >
                        +
                      </button>

                      <button
                        className="products-container__button"
                        type="button"
                        id={item._id}
                        onClick={() => {
                          if (item.quantity <= 1) {
                            dispatch(deleteProduct(item));
                          } else {
                            dispatch(decreaseProduct(item));
                          }
                        }}
                      >
                        -
                      </button>
                      <button
                        className="products-container__button--remove"
                        type="button"
                        id={item._id}
                        onClick={() => dispatch(deleteProduct(item))}
                      >
                        remove
                      </button>

                    </li>
                  </ul>
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
