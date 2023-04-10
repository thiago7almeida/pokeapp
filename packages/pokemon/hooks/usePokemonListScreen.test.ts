import {useNavigation} from '@react-navigation/native';
import {renderHook, act} from '@testing-library/react-hooks';

import {usePokemonListScreen} from './usePokemonListScreen';
import {useGetPokemon} from './useGetPokemon';
import {TPokemonReturn} from '../graphql';

jest.mock('@react-navigation/native', () => ({
  useNavigation: jest.fn(() => ({})),
}));

jest.mock('./useGetPokemon', () => ({
  useGetPokemon: jest.fn(() => ({
    data: [],
    loadMore: jest.fn(),
    loading: false,
  })),
}));

const mockUseNavigation = useNavigation as jest.Mock;
const mockUseGetPokemon = useGetPokemon as jest.Mock;

describe('usePokemonListScreen', () => {
  const pokemon = {
    name: 'Pikachu',
    id: 25,
    height: 10,
    weight: 10,
    pokemon_v2_pokemontypes: [],
  } as TPokemonReturn;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should update input value correctly', () => {
    const {result} = renderHook(() => usePokemonListScreen());

    act(() => {
      result.current.input.onChangeText('Pikachu');
    });

    expect(result.current.input.value).toEqual('Pikachu');
  });

  it('should navigate to PokemonDetail screen when item is pressed', () => {
    const navigate = jest.fn();
    mockUseNavigation.mockReturnValue({navigate});

    const {result} = renderHook(() => usePokemonListScreen());

    act(() => {
      result.current.onPressItem(pokemon);
    });

    expect(navigate).toHaveBeenCalledWith('PokemonDetail', pokemon);
  });

  it('should call useGetPokemon with correct value', () => {
    mockUseGetPokemon.mockReturnValue({
      data: [],
      loadMore: jest.fn(),
      loading: false,
    });

    const {result} = renderHook(() => usePokemonListScreen());

    act(() => {
      result.current.input.onChangeText('Pikachu');
    });

    expect(useGetPokemon).toHaveBeenCalledWith('Pikachu');
  });

  it('should return correct values from useGetPokemon', () => {
    mockUseGetPokemon.mockReturnValue({
      data: [pokemon],
      loadMore: jest.fn(),
      loading: false,
    });

    const {result} = renderHook(() => usePokemonListScreen());

    expect(result.current.list.data).toEqual([pokemon]);
    expect(result.current.list.loading).toEqual(false);
  });
});
