import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import selectedPokemonReducer from './selectedPokemonReducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  selectedPokemon: selectedPokemonReducer
});

export default rootReducer;
