import React, {useEffect, useMemo} from 'react';
import {StatusBar} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {responsive, colors, PokemonContent} from '@components';

import {IMAGE_URL} from '../PokemonList/PokemonList.constants';
import {TPokemonReturn} from '../../graphql';
import {Container, ImageContainer, Image} from './PokemonDetail.styles';

export const PokemonDetail: React.FC = () => {
  const route = useRoute();
  const pokemon = route.params as TPokemonReturn;
  const {setOptions} = useNavigation();

  const backgroundColor = useMemo(() => {
    const type = pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
    return colors[type] || colors.bug;
  }, [pokemon]);

  useEffect(() => {
    setOptions({title: pokemon.name});
  }, [pokemon.name, setOptions]);

  return (
    <>
      <StatusBar backgroundColor={backgroundColor} />
      <Container>
        <ImageContainer customBackgroundColor={backgroundColor}>
          <Image
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
