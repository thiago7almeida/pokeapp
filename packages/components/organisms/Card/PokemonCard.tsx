import React, {useMemo} from 'react';

import {colors, Card} from '@components';
import {Pressable} from 'react-native';

export const PokemonCard: React.FC<{
  pokemon: {name: string; type: string; image: string};
  onPress: () => void;
}> = ({pokemon, onPress}) => {
  const backgroundColor = useMemo(() => {
    return colors[pokemon.type] || colors.bug;
  }, [pokemon]);

  return (
    <Pressable onPress={onPress}>
      <Card
        backgroundColor={backgroundColor}
        title={pokemon.name}
        uri={pokemon.image}
      />
    </Pressable>
  );
};
