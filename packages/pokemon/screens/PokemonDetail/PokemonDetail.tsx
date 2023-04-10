import React from 'react';
import {StatusBar} from 'react-native';

import {responsive, PokemonContent} from '@components';

import {IMAGE_URL} from '../PokemonList/PokemonList.constants';
import {Container, ImageContainer, Image} from './PokemonDetail.styles';

import {TPokemonReturn} from '../../graphql';

export const PokemonDetailComponent: React.FC<{
  backgroundColor: string;
  pokemon: TPokemonReturn;
}> = ({backgroundColor, pokemon}) => {
  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <Container testID="container">
        <ImageContainer customBackgroundColor={backgroundColor}>
          <Image
            testID="image"
            source={{
              uri: `${IMAGE_URL}${pokemon.id}.png`,
              width: responsive.size(200),
              height: responsive.size(200),
            }}
          />
        </ImageContainer>
      </Container>
      <PokemonContent
        height={pokemon.height}
        weight={pokemon.weight}
        types={pokemon.pokemon_v2_pokemontypes}
      />
    </>
  );
};
