import {useQuery} from '@apollo/client';

import {POKEMON_QUERY} from '../graphql/pokemonQuery';
import {useCallback, useEffect} from 'react';

export const useGetPokemon = (filter?: string) => {
  const {data, fetchMore, loading, refetch} = useQuery(POKEMON_QUERY, {
    variables: {
      limit: 20,
      offset: 0,
      where: filter ? {name: {_like: `${filter}%`}} : null,
    },
  });

  const loadMore = async () => {
    if (loading) {
      return;
    }
    await fetchMore({
      variables: {offset: data.pokemon_v2_pokemon.length},
    });
  };

  const search = useCallback(async () => {
    return await refetch({
      limit: 20,
      offset: 0,
      where: filter ? {name: {_like: `${filter.toLowerCase()}%`}} : null,
    });
  }, [filter, refetch]);

  useEffect(() => {
    if (loading) {
      return;
    }
    search();
  }, [filter, loading, search]);

  return {
    data: data?.pokemon_v2_pokemon || [],
    loading,
    loadMore,
  };
};
