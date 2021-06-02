import actionTypes from '../actions/actionTypes';
/* import POKEMONS from '../../constants/mockPokemons'; */

function pokemonReducer(pokemons = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      return action.pokemons;

    default:
      return pokemons;
  }
}

export default pokemonReducer;
