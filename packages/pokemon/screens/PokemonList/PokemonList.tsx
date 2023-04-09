import React, {useCallback} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';

import {PokemonCard, TextInput} from '@components';

import {TPokemonReturn} from '../../graphql/pokemonQuery.types';
import {List, Separator} from './PokemonList.styles';
import {IMAGE_URL} from './PokemonList.constants';

export const PokemonListComponent: React.FC<{
  input: {value: string; setValue: (value: string) => void};
  list: {
    data: TPokemonReturn[];
    loading: boolean;
    loadMore: () => Promise<void>;
  };
}> = ({input, list}) => {
  const keyExtractor = useCallback(
    (item: TPokemonReturn) => item.id.toString(),
    [],
  );

  const renderItem = useCallback(
    ({index, item}: {index: number; item: TPokemonReturn}) => (
      <Separator margin={index % 2 === 1}>
        <PokemonCard
          pokemon={{
            type: item.pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
            image: `${IMAGE_URL}${item.id}.png`,
            name: item.name,
          }}
        />
      </Separator>
    ),
    [],
  );

  return (
    <SafeAreaView>
      <List
        ListFooterComponent={list.loading ? <ActivityIndicator /> : null}
        onEndReached={list.loadMore}
        ListHeaderComponent={
          <TextInput {...input} autoCorrect={false} placeholder="Pesquisar" />
        }
        data={list.data}
        keyExtractor={keyExtractor}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};
