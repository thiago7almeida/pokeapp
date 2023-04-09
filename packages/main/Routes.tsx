import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Navigator} from '@pokemon';

export const Routes = () => {
  return <NavigationContainer>{Navigator}</NavigationContainer>;
};
