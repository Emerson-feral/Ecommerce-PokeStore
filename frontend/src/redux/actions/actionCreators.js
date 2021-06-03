/* eslint-disable no-underscore-dangle */
import actionTypes from './actionTypes';
import POKEMONS from '../../constants/mockPokemons';
/* import axios from 'axios' */

export function loadPokemons() {
  return {
    type: actionTypes.LOAD_POKEMONS,
    pokemons: POKEMONS
  };
}

export function getPokemonById(pokemonId) {
  const pokemon = POKEMONS.find((current) => current._id === pokemonId);
  return {
    type: actionTypes.LOAD_POKEMON,
    pokemon
  };
}
