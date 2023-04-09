import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComingSoonScreen from '../screens/ComingSoonScreen.js';

const Stack = createNativeStackNavigator();

const UserProfileNavigation = () => {
  return (
    <Stack.Navigator initialRouteName='Profile'>
      <Stack.Screen name='Profile' component={ComingSoonScreen} />
      <Stack.Screen name='Settings' component={ComingSoonScreen} />
    </Stack.Navigator>
  );
};

export default UserProfileNavigation;
