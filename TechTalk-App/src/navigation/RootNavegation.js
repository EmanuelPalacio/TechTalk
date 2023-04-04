import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavegation from './HomeNavegation';

const RootNavegation = () => {
  return (
    <NavigationContainer>
      <HomeNavegation />
    </NavigationContainer>
  );
};

export default RootNavegation;
