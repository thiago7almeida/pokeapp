import {useDeferredValue, useState} from 'react';
import {useNavigation} from '@react-navigation/native';

import {useGetPokemon} from './useGetPokemon';
import {TPokemonReturn} from '../graphql';

export const usePokemonListScreen = () => {
  const {navigate} = useNavigation();
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  const {data, loadMore, loading} = useGetPokemon(deferredValue);

  const onPressItem = (pokemon: TPokemonReturn) => {
    navigate('PokemonDetail', pokemon);
  };

  return {
    input: {onChangeText: setValue, value},
    list: {data, loadMore, loading},
    onPressItem,
  };
};
