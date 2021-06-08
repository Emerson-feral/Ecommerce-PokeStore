/* eslint-disable no-underscore-dangle */
import axios from 'axios';
import actionTypes from './actionTypes';
import POKEMONS from '../../constants/mockPokemons';

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
  const pokemon = POKEMONS.find((current) => current._id === pokemonId);
  return {
    type: actionTypes.LOAD_POKEMON,
    pokemon
  };
}

export function filterPokemon(filterType) {
  return {
    type: actionTypes.FILTER_POKEMON,
    filterType
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
