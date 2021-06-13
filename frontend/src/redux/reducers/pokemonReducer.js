import actionTypes from '../actions/actionTypes';

function pokemonReducer(pokemons = [], action) {
  switch (action.type) {
    case actionTypes.LOAD_POKEMONS:
      return action.pokemons;

    default:
      return pokemons;
  }
}

export default pokemonReducer;
