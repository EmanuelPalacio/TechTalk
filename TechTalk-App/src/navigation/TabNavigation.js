import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoadScreen from '../screens/LoadScreen.js';
import ComingSoonScreen from '../screens/ComingSoonScreen.js';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Conectar' component={ComingSoonScreen} />
      <Tab.Screen name='Chat' component={ComingSoonScreen} />
      <Tab.Screen name='Aprende' component={ComingSoonScreen} />
      <Tab.Screen name='Perfil' component={ComingSoonScreen} />
    </Tab.Navigator>
  );
};

export default TabNavigation;
