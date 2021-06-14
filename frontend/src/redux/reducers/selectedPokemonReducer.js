import actionTypes from '../actions/actionTypes';

function selectedPokemonReducer(pokemon = {}, action) {
  if (action.type === actionTypes.LOAD_POKEMON) {
    return action.pokemon;
  }
  return pokemon;
}
export default selectedPokemonReducer;
