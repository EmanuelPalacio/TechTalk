import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SvgUri } from 'react-native-svg';
import StyledText from '../components/StyledText.js';
import StyledButton from '../components/StyledButton.js';
import theme from '../themes/theme.js';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();
  const nav = (route) => {
    navigation.navigate(route);
  };
  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680633470/Images%20proyect%20techTalk/TechTalkAssets/Logo_am4uj0.svg' />
        <View style={styles.text}>
          <StyledText fontSize='title' color='third'>
            ¡Bienvenido a{' '}
          </StyledText>
          <StyledText fontSize='title' color='secondary' fontWeight='bold'>
            TechTalk!
          </StyledText>
        </View>
      </View>
      <View style={styles.robot}>
        <SvgUri
          height='300px'
          alignSelf='center'
          resizeMode='contain'
          uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/HiRobot_y5cgw7.svg'
        />
      </View>
      <View style={styles.buttons}>
        <StyledButton
          type='primary'
          text='Iniciar Sesión'
          action={() => nav('Login')}
        />
        <StyledButton
          type='secondary'
          text='Registrarse'
          action={() => nav('Register')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.bottomTabBarHeight,
    height: '100%',
    justifyContent: 'space-evenly',
    gap: 15,
    backgroundColor: theme.colors.primary,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  robot: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
});

export default Home;
