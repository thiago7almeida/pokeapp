import React from 'react';
import {render} from '@testing-library/react-native';
import {PokemonContent} from './PokemonContent';

jest.mock('@components', () => ({
  ...jest.requireActual('@components'),
  responsive: {
    size: (value: number) => value,
  },
  spacing: {
    s4: 4,
    s8: 8,
    s16: 16,
    s24: 24,
    s32: 32,
  },
}));

const mockTypes = [
  {pokemon_v2_type: {name: 'type1'}},
  {pokemon_v2_type: {name: 'type2'}},
];
const mockHeight = 1.5;
const mockWeight = 50;

describe('PokemonContent', () => {
  it('should render types labels correctly', () => {
    const {getByText} = render(
      <PokemonContent
        types={mockTypes}
        height={mockHeight}
        weight={mockWeight}
      />,
    );

    mockTypes.forEach(({pokemon_v2_type: {name: type}}) => {
      const typeLabel = getByText(type);
      expect(typeLabel).toBeDefined();
    });
  });

  it('should render height and weight labels correctly', () => {
    const {getByText} = render(
      <PokemonContent
        types={mockTypes}
        height={mockHeight}
        weight={mockWeight}
      />,
    );

    const heightLabel = getByText(`${mockHeight} m`);
    const weightLabel = getByText(`${mockWeight} kg`);

    expect(heightLabel).toBeDefined();
    expect(weightLabel).toBeDefined();
  });
});
