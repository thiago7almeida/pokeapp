import {useDeferredValue, useState} from 'react';

import {useGetPokemon} from './useGetPokemon';

export const usePokemonListScreen = () => {
  const [value, setValue] = useState('');
  const deferredValue = useDeferredValue(value);

  const {data, loadMore, loading} = useGetPokemon(deferredValue);

  return {input: {setValue, value}, list: {data, loadMore, loading}};
};
