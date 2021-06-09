import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCart } from '../../redux/actions/actionCreators';

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

              cart.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                </tr>
              ))

            )
            : (
              <p>Empty cart</p>
            )
      }
    </>
  );
}

export default ShoppingCart;
