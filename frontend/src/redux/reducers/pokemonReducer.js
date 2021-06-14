import actionTypes from '../actions/actionTypes';

function pokemonReducer(pokemons = [], action) {
  if (action.type === actionTypes.LOAD_POKEMONS) {
    return action.pokemons;
  }
  return pokemons;
}
export default pokemonReducer;
