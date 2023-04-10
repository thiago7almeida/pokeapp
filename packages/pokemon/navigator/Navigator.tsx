import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PokemonList, PokemonDetail} from '../screens';
import {TPokemonReturn} from '../graphql';
import {spacing} from '../../components/layouts';

export type RootStackParamList = {
  PokemonList: undefined;
  PokemonDetail: TPokemonReturn;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export const Navigator = (
  <Stack.Navigator>
    <Stack.Screen
      name="PokemonList"
      options={{headerShown: false}}
      component={PokemonList}
    />
    <Stack.Screen
      name="PokemonDetail"
      component={PokemonDetail}
      options={{
        headerTransparent: true,
        headerTintColor: '#fff',
        title: '',
        headerTitleStyle: {fontSize: spacing.s24},
        headerBackTitle: '',
      }}
    />
  </Stack.Navigator>
);
