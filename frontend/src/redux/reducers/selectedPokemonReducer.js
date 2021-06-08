import actionTypes from '../actions/actionTypes';

function selectedPokemonReducer(pokemon = {}, action) {
  switch (action.type) {
    case actionTypes.LOAD_POKEMON:
      return action.pokemon;

    default:
      return pokemon;
  }
}

export default selectedPokemonReducer;
