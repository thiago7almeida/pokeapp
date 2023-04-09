import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PokemonList, PokemonDetail} from '../screens';

const Stack = createNativeStackNavigator();

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
        headerTitleStyle: {fontSize: 24},
        headerBackTitle: '',
      }}
    />
  </Stack.Navigator>
);
