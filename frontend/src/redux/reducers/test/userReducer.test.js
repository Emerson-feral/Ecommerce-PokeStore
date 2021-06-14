import actionTypes from '../../actions/actionTypes';
import usersReducer from '../usersReducer';

describe('usersReducer', () => {
  test('should return a new object', () => {
    const user = {};

    const action = {
      type: actionTypes.LOGIN
    };
    const result = usersReducer(user, action.type);
    expect(result).toBe(user);
  });
});
