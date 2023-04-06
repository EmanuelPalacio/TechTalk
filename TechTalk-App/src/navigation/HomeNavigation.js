import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen.js';
import LoadScreen from '../screens/LoadScreen.js';

const Stack = createNativeStackNavigator();

const HomeNavegation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Loading'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name='Loading'
        initialParams={{ timer: true }}
        component={LoadScreen}
      />
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavegation;
