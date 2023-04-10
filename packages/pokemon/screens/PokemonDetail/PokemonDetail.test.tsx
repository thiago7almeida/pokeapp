import React from 'react';
import {render} from '@testing-library/react-native';

import {PokemonDetailComponent} from './PokemonDetail';

describe('PokemonDetailComponent', () => {
  const pokemon = {
    id: 1,
    name: 'Bulbasaur',
    height: 0.7,
    weight: 6.9,
    pokemon_v2_pokemontypes: [
      {pokemon_v2_type: {name: 'Grass'}},
      {pokemon_v2_type: {name: 'Poison'}},
    ],
  };

  it('should render a background color and image', () => {
    const {getByTestId} = render(
      <PokemonDetailComponent backgroundColor="green" pokemon={pokemon} />,
    );
    const image = getByTestId('image');
    expect(image.props.source.uri).toEqual(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    );
  });

  it('should render the correct height and weight', () => {
    const {getByText} = render(
      <PokemonDetailComponent backgroundColor="green" pokemon={pokemon} />,
    );
    const heightLabel = getByText('0.7 m');
    const weightLabel = getByText('6.9 kg');
    expect(heightLabel).toBeDefined();
    expect(weightLabel).toBeDefined();
  });

  it('should render the correct number of types', () => {
    const {getAllByTestId} = render(
      <PokemonDetailComponent backgroundColor="green" pokemon={pokemon} />,
    );
    const typeLabels = getAllByTestId('type-label');
    expect(typeLabels).toHaveLength(2);
    expect(typeLabels[0].props.children).toEqual('Grass');
    expect(typeLabels[1].props.children).toEqual('Poison');
  });
});
