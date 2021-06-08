import { combineReducers } from 'redux';
import pokemonReducer from './pokemonReducer';
import selectedPokemonReducer from './selectedPokemonReducer';
import usersReducer from './userReducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  selectedPokemon: selectedPokemonReducer,
  user: usersReducer
});

export default rootReducer;
