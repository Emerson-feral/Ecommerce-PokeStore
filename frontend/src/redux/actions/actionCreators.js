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
