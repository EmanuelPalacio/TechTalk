import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { useSelector } from 'react-redux';
import LoginScreen from '../screens/LoginScreen.js';

const Stack = createNativeStackNavigator();

const HomeNavegation = () => {
  const { status } = useSelector((state) => state.auth);

  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default HomeNavegation;
