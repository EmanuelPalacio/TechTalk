import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ComingSoonScreen from '../screens/ComingSoonScreen.js';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import theme from '../themes/theme.js';
import { SvgUri } from 'react-native-svg';
import StyledText from '../components/StyledText.js';
import UserProfileNavigation from './UserProfileNavigation.js';
import ChatNavigation from './ChatNavigation.js';
import ActivitiesNavegation from './ActivitiesNavegation.js';

const Tab = createBottomTabNavigator();

/* En esta parte va la logia de socket.io para las notificaciones */

const TabNavigation = () => {
  const navigation = useNavigation();

  return (
    <Tab.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: theme.colors.primaryText,
        headerStyle: {
          backgroundColor: theme.colors.primaryBackground,
          elevation: 5,
          shadowOffset: { width: 0, height: 10 },
          shadowColor: 'black',
          shadowOpacity: 0.5,
          shadowRadius: 10,
        },
        headerLeftContainerStyle: {
          paddingLeft: 20,
        },
        headerRightContainerStyle: {
          paddingRight: 20,
        },
        headerLeft: () => (
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680910700/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Volver_ilvo2t.svg' />
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
            style={styles.containerNotification}
            /* onPress={() => navigation.goBack()} */
          >
            <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680921806/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Notificaciones_aqqttv.svg' />
            <View style={styles.notificationCircle}>
              <StyledText color='secondary'>3</StyledText>
            </View>
          </TouchableOpacity>
        ),
      }}
    >
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
        component={ChatNavigation}
        options={{
          headerShown: false,
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
        component={ActivitiesNavegation}
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
        component={UserProfileNavigation}
        initialRouteName='Profile'
        options={{
          headerShown: false,
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

const styles = StyleSheet.create({
  containerNotification: {
    position: 'relative',
  },
  notificationCircle: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 24,
    minHeight: 24,
    borderRadius: 12,
    backgroundColor: theme.colors.third,
    top: 15,
    left: 20,
  },
});
