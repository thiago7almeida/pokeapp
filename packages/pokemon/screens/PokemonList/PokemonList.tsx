import React, {useCallback} from 'react';
import {SafeAreaView, ActivityIndicator} from 'react-native';

import {PokemonCard, TextInput} from '@components';

import {List, Separator} from './PokemonList.styles';
import {IMAGE_URL} from './PokemonList.constants';
import {TPokemonReturn} from '../../graphql';

export const PokemonListComponent: React.FC<{
  input: {value: string; onChangeText: (value: string) => void};
  list: {
    data: TPokemonReturn[];
    loading: boolean;
    loadMore: () => Promise<void>;
  };
  onPressItem: (pokemon: TPokemonReturn) => void;
}> = ({input, list, onPressItem}) => {
  const keyExtractor = useCallback(
    (item: TPokemonReturn) => item.id.toString(),
    [],
  );

  const renderItem = ({index, item}: {index: number; item: TPokemonReturn}) => (
    <Separator hasMargin={index % 2 === 1}>
      <PokemonCard
        onPress={() => onPressItem(item)}
        pokemon={{
          type: item.pokemon_v2_pokemontypes[0].pokemon_v2_type.name,
          image: `${IMAGE_URL}${item.id}.png`,
          name: item.name,
        }}
      />
    </Separator>
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
