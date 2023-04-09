import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ComingSoonScreen from '../screens/ComingSoonScreen.js';
import theme from '../themes/theme.js';
import { TouchableOpacity } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

const UserProfileNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName='Profile'
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
      }}
    >
      <Stack.Screen
        name='Profile'
        component={ComingSoonScreen}
        options={{
          title: 'Mi perfil',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680910700/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Volver_ilvo2t.svg' />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1681069436/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Settings_cpou7z.svg' />
            </TouchableOpacity>
          ),
        }}
      />
      <Stack.Screen
        name='Settings'
        component={ComingSoonScreen}
        options={{
          title: 'Editar Perfil',

          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680910700/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/Volver_ilvo2t.svg' />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default UserProfileNavigation;
