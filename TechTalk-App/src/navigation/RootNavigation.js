import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import HomeNavigation from './HomeNavigation';
import TabNavigation from './TabNavigation.js';
import { useSelector } from 'react-redux';
import LoadScreen from '../screens/LoadScreen.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootNavegation = () => {
  const { status } = useSelector((store) => store.auth);
  const { status: loading } = useSelector((store) => store.loading);
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      {status === 'unauthorized' ? (
        <HomeNavigation />
      ) : (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name='Loading'
            initialParams={{ timer: false }}
            component={LoadScreen}
          />
          <Stack.Screen name='App' component={TabNavigation} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
};

export default RootNavegation;
