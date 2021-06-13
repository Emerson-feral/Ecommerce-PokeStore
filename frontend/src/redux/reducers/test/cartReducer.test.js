import actionTypes from '../../actions/actionTypes';
import cartReducer from '../cartReducer';

describe('cartReducer', () => {
  test('should remove item', () => {
    const cart = [];

    const action = {
      type: actionTypes.DELETE_PRODUCT
    };

    const result = cartReducer(cart, action.type);

    expect(result).toBe(cart);
  });
});
