import actionTypes from './actionTypes';
import POKEMONS from '../../constants/mockPokemons';
/* import axios from 'axios' */

function loadPokemons() {
  return {
    type: actionTypes.LOAD_POKEMONS,
    pokemons: POKEMONS
  };
}

export default loadPokemons;
