import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import pokemonReducer from './pokemonReducer';
import selectedPokemonReducer from './selectedPokemonReducer';
import usersReducer from './usersReducer';

const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  selectedPokemon: selectedPokemonReducer,
  user: usersReducer,
  cart: cartReducer
});

export default rootReducer;
