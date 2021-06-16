import axios from 'axios';
import {
  loadPokemons, userLogin, loadCart, getPokemonById, addToCart, deleteProduct, decreaseProduct
} from './actionCreators';
import actionTypes from './actionTypes';

jest.mock('axios');

describe('loadPokemons', () => {
  test('should dispatch LOAD_POKEMONS_ERROR', async () => {
    const dispatch = jest.fn();

    axios.mockRejectedValue();
    await loadPokemons()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_POKEMONS_ERROR
    });
  });

  test('should dispatch LOAD_POKEMONS', async () => {
    const dispatch = jest.fn();
    const user = {};
    const data = [{ name: 'picachu' }];
    axios.mockResolvedValue({ data });

    await loadPokemons(user)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_POKEMONS,
      pokemons: [{ name: 'picachu' }]
    });
  });
});

describe('getPokemonById', () => {
  test('should get getPokemonById', async () => {
    const dispatch = jest.fn();
    const data = 'emerson';

    axios.mockResolvedValue({ data });

    await getPokemonById()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_POKEMON,
      pokemon: data
    });
  });
});

describe('userLogin', () => {
  test('should dispatch LOGIN_ERROR', async () => {
    const dispatch = jest.fn();
    axios.post.mockRejectedValue();
    await userLogin()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOGIN_ERROR
    });
  });

  test('should dispatch LOGIN', async () => {
    const dispatch = jest.fn();
    const email = '';
    const password = '';
    const data = [{ token: '12345', refreshToken: '54321' }];

    axios.post.mockResolvedValue({ data });

    await userLogin(email, password)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOGIN,
      user: [{ token: '12345', refreshToken: '54321' }]
    });
  });
});

describe('addToCart', () => {
  test('should add to cart', () => {
    const product = { name: 'pikachu' };

    expect(addToCart(product)).toStrictEqual({
      type: actionTypes.ADD_PRODUCT_CART,
      product: { name: 'pikachu' }
    });
  });
});

describe('loadCart', () => {
  test('should load cart', () => {
    expect(loadCart()).toStrictEqual({
      type: actionTypes.LOAD_CART
    });
  });
});

describe('deleteProduct', () => {
  test('Should delete product', () => {
    const productToDelete = deleteProduct();
    expect(productToDelete).toEqual({ type: actionTypes.DELETE_PRODUCT });
  });
});

describe('decreaseProduct', () => {
  test('should decrease product', () => {
    const product = 'tabom';

    expect(decreaseProduct(product)).toStrictEqual({
      type: actionTypes.DECREASE_PRODUCT,
      product
    });
  });
});
