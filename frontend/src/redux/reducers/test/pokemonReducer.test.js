import pokemonReducer from '../pokemonReducer';
import actionTypes from '../../actions/actionTypes';

describe('pokemonReducer', () => {
  test('should return a new array', () => {
    const pokemons = ['pikachu'];

    const action = {
      type: actionTypes.LOAD_POKEMONS
    };

    const result = pokemonReducer(pokemons, action.type);
    expect(result).toBe(pokemons);
  });
});
