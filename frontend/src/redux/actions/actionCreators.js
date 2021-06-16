/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';

const URL_API = process.env.REACT_APP_URL_API;

const URL_LOGIN = process.env.REACT_APP_URL_LOGIN;

export function loadPokemons(user) {
  return async (dispatch) => {
    try {
      const { data } = await axios(URL_API, { headers: { Authorization: `Bearer ${user.token}` } });
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
    const { data } = await axios(`${URL_API}/${pokemonId}`);
    dispatch({
      type: actionTypes.LOAD_POKEMON,
      pokemon: data
    });
  };
}

export function userLogin(email, password) {
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
  return {
    type: actionTypes.DELETE_PRODUCT,
    product
  };
}
export function decreaseProduct(product) {
  return {
    type: actionTypes.DECREASE_PRODUCT,
    product
  };
}
