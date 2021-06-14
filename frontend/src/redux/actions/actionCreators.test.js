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
    axios.mockResolvedValue({
      pokemons: {}
    });

    const user = {
      token: 'token'
    };

    await loadPokemons(user)(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOAD_POKEMONS,
      pokemons: undefined
    });
  });
});

describe('getPokemonById', () => {
  test('should get getPokemonById', async () => {
    const dispatch = jest.fn();
    const data = 'emerson';
    axios.mockResolvedValue(data);
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
    axios.mockRejectedValue();
    await userLogin()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: actionTypes.LOGIN_ERROR
    });
  });
});

describe('addToCart', () => {
  test('should add to cart', () => {
    const data = 'pokemon';

    addToCart(data);

    expect(data).toBe('pokemon');
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
  test('should remove from cart', () => {
    const product = {};

    expect(deleteProduct(product)).toStrictEqual({
      type: actionTypes.DELETE_PRODUCT,
      product
    });
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
