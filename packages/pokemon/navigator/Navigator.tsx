import React from 'react';
import {View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {PokemonList} from '../screens';

const Stack = createNativeStackNavigator();

export const Navigator = (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      options={{headerShown: false}}
      component={PokemonList}
    />
    <Stack.Screen name="Home2" component={View} />
  </Stack.Navigator>
);
