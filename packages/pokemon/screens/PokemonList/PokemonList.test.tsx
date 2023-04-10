import React from 'react';
import {render} from '@testing-library/react-native';

import {PokemonListComponent} from './PokemonList';

describe('PokemonListComponent', () => {
  it('should render input and list', () => {
    const input = {value: '', onChangeText: jest.fn()};
    const list = {data: [], loading: false, loadMore: jest.fn()};
    const {getByPlaceholderText, getByTestId} = render(
      <PokemonListComponent
        input={input}
        list={list}
        onPressItem={jest.fn()}
      />,
    );

    const inputElement = getByPlaceholderText('Pesquisar');
    const listElement = getByTestId('pokemon-list');

    expect(inputElement).toBeDefined();
    expect(listElement).toBeDefined();
  });
});
