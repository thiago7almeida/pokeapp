import React from 'react';

import {Typography} from '../../atoms';
import {colors} from '../../layouts';

import {
  BorderedLabelContainer,
  Content,
  LabelContainer,
} from './PokemonContent.styles';
import {TPokemonReturn} from '../../../pokemon/graphql';

export const PokemonContent: React.FC<{
  height: number;
  weight: number;
  types: TPokemonReturn['pokemon_v2_pokemontypes'];
}> = ({height, weight, types}) => {
  return (
    <Content>
      {types.map(({pokemon_v2_type: {name: type}}) => (
        <LabelContainer key={type} customBackgroundColor={colors[type]}>
          <Typography.BigLabel>{type}</Typography.BigLabel>
        </LabelContainer>
      ))}
      <BorderedLabelContainer>
        <Typography.BorderedLabel color="black">
          {height} m
        </Typography.BorderedLabel>
        <Typography.BorderedLabel color="black">
          {weight} kg
        </Typography.BorderedLabel>
      </BorderedLabelContainer>
    </Content>
  );
};
