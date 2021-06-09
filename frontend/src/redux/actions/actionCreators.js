/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const url = 'http://localhost:1996/api/pokemons/';

const URL_LOGIN = 'http://localhost:1996/login';

export function loadPokemons(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios(url, { headers: { Authorization: `Bearer ${user.token}` } });
      dispatch({
        type: actionTypes.LOAD_POKEMONS,
        pokemons: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOAD_POKEMONS_ERROR
      });
    }
  };
}

export function getPokemonById(pokemonId) {
  return async (dispatch) => {
    const { data } = await axios(`${url}/${pokemonId}`);
    dispatch({
      type: actionTypes.LOAD_POKEMON,
      pokemon: data
    });
  };
}

export default function userLogin(email, password) {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(URL_LOGIN, { email, password });
      dispatch({
        type: actionTypes.LOGIN,
        user: data
      });
    } catch (error) {
      dispatch({
        type: actionTypes.LOGIN_ERROR
      });
    }
  };
}

export function addToCart(product) {
  return {
    type: actionTypes.ADD_PRODUCT_CART,
    product
  };
}
export function loadCart() {
  return {
    type: actionTypes.LOAD_CART
  };
}

export function deleteProduct(product) {
  const productToDelete = { ...product };
  return {
    type: actionTypes.DELETE_PRODUCT,
    product: productToDelete
  };
}
export function decreaseProduct(product) {
  return {
    type: actionTypes.DECREASE_PRODUCT,
    product
  };
}
