import {useEffect, useMemo} from 'react';

import {colors} from '@components';
import {useNavigation, useRoute} from '@react-navigation/native';

import {TPokemonReturn} from '../graphql';

export const usePokemonDetailScreen = () => {
  const route = useRoute();
  const {setOptions} = useNavigation();
  const pokemon = route.params as TPokemonReturn;

  const backgroundColor = useMemo(() => {
    const type = pokemon.pokemon_v2_pokemontypes[0].pokemon_v2_type.name;
    return colors[type] || colors.bug;
  }, [pokemon]);

  useEffect(() => {
    setOptions({title: pokemon.name});
  }, [pokemon.name, setOptions]);

  return {backgroundColor, pokemon};
};
