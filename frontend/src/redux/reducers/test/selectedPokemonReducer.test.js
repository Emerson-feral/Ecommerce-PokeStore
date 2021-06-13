import selectedPokemonReducer from '../selectedPokemonReducer';
import actionTypes from '../../actions/actionTypes';

describe('selectedPokemonReducer', () => {
  test('should return a new object', () => {
    const pokemon = {};

    const action = {
      type: actionTypes.LOAD_POKEMON
    };

    const result = selectedPokemonReducer(pokemon, action.type);

    expect(result).toBe(pokemon);
  });
});
