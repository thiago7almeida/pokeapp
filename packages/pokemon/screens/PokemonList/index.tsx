import React from 'react';

import {usePokemonListScreen} from '../../hooks/usePokemonListScreen';
import {PokemonListComponent} from './PokemonList';

export const PokemonList: React.FC = () => {
  const pokemonListProps = usePokemonListScreen();
  return <PokemonListComponent {...pokemonListProps} />;
};
