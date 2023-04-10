import {renderHook} from '@testing-library/react-hooks';
import {usePokemonDetailScreen} from './usePokemonDetailScreen';

const pokemon = {
  name: 'Pikachu',
  pokemon_v2_pokemontypes: [{pokemon_v2_type: {name: 'electric'}}],
};

const setOptions = jest.fn();

jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    setOptions,
  }),
  useRoute: () => ({
    params: pokemon,
  }),
}));

describe('usePokemonDetailScreen', () => {
  it('returns a background color based on the first type of the pokemon', () => {
    const {result} = renderHook(() => usePokemonDetailScreen());
    expect(result.current.backgroundColor).toEqual('#F7D02C');
  });

  it('sets the navigation options with the pokemon name', () => {
    renderHook(() => usePokemonDetailScreen());
    expect(setOptions).toHaveBeenCalledWith({title: 'Pikachu'});
  });

  it('returns the pokemon object', () => {
    const {result} = renderHook(() => usePokemonDetailScreen());
    expect(result.current.pokemon).toEqual(pokemon);
  });
});
