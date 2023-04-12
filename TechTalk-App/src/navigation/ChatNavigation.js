import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import theme from '../themes/theme.js';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useNavigation } from '@react-navigation/native';
import ContactScreen from '../screens/ContactScreen.js';
import StyledText from '../components/StyledText.js';
import ChatContact from '../screens/ChatContact.js';
import { useSelector } from 'react-redux';

const Stack = createNativeStackNavigator();

const ChatNavigation = () => {
  const { conversation } = useSelector((store) => store.conversation);
  console.warn(conversation);
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName='Conctacts'
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
        name='Conctacts'
        component={ContactScreen}
        options={{
          title: 'Contactos',
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()}>
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
      />
      <Stack.Screen name='Menssages' component={ChatContact} />
    </Stack.Navigator>
  );
};

export default ChatNavigation;

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
