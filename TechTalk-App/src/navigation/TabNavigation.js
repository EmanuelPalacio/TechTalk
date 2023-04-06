import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComingSoonScreen from '../screens/ComingSoonScreen.js';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Conectar'
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680781051/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/ConectarSelected_xb0jdv.png',
                      }
                    : {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680780236/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Conectar_iw8ylh.png',
                      }
                }
                style={{ width: 20, height: 20 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Chat'
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680780236/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/ChatSelected_loyp6c.png',
                      }
                    : {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680780236/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Chat_ekcelp.png',
                      }
                }
                style={{ width: 20, height: 20 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Aprende'
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680781051/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/AprenderSelected_oisheu.png',
                      }
                    : {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680780236/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Aprender_gd6wxn.png',
                      }
                }
                style={{ width: 20, height: 20 }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Perfil'
        component={ComingSoonScreen}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Image
                source={
                  focused
                    ? {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680781051/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/PerfilSelected_noad8k.png',
                      }
                    : {
                        uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680780236/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Perfil_zyjklt.png',
                      }
                }
                style={{ width: 20, height: 20 }}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
