import React from 'react';

import {PokemonDetailComponent} from './PokemonDetail';
import {usePokemonDetailScreen} from '../../hooks/usePokemonDetailScreen';

export const PokemonDetail: React.FC = () => {
  const pokemonDetailProps = usePokemonDetailScreen();
  return <PokemonDetailComponent {...pokemonDetailProps} />;
};
