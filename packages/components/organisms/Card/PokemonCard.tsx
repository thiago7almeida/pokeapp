import React, {useMemo} from 'react';

import {colors, Card} from '@components';

export const PokemonCard: React.FC<{
  pokemon: {name: string; type: string; image: string};
}> = ({pokemon}) => {
  const backgroundColor = useMemo(() => {
    return colors[pokemon.type] || colors.bug;
  }, [pokemon]);

  return (
    <Card
      backgroundColor={backgroundColor}
      title={pokemon.name}
      uri={pokemon.image}
    />
  );
};
