/* react / expo */
import React from 'react';
import { View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { SvgUri } from 'react-native-svg';
/* redux */
import { useDispatch } from 'react-redux';
/* components and functions */
import StyledText from '../components/StyledText.js';
import StyledButton from '../components/StyledButton.js';
import theme from '../themes/theme.js';
import StyledInput from '../components/StyledInput.js';
import login from '../services/login.js';
import { authorized, logIn } from '../store/auth/AuthSlice.js';
import getUserInfo from '../services/getUserInfo.js';
import { fulfilled } from '../store/loading/LoadingSlice.js';
import StyledLink from '../components/StyledLink.js';
import { useNavigation } from '@react-navigation/native';
import useDataCollection from '../hooks/useDataCollection.js';

const LoginScreen = () => {
  const [value, collection] = useDataCollection({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const nav = (route) => {
    navigation.navigate(route);
  };

  const sendForm = async () => {
    try {
      const { id, token } = await login(value.email, value.password);
      if (id) {
        dispatch(authorized());
        const user = await getUserInfo(id, token).then(() => {
          dispatch(fulfilled());
        });
        dispatch(logIn({ user, token }));
      }
    } catch (error) {
      console.error('hola', error);
    }
  };

  return (
    <View style={styles.root}>
      <View style={styles.logo}>
        <SvgUri uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/LogoTechTalk_y15vs5.svg' />
        <View style={styles.text}>
          <StyledText fontSize='title' fontWeight='bold'>
            ¡Bienvenido de vuelta!
          </StyledText>
          <StyledText fontSize='subheading'>
            Ingresa tus datos para continuar
          </StyledText>
        </View>
      </View>
      <View style={styles.form}>
        <StyledInput
          placeholder='Ingrese su email'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/icons/email_oz4rsn.svg'
          onChangeText={(text) => collection(text, 'email')}
          keyboardType='email'
        />
        <StyledInput
          placeholder='Contraseña'
          url='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/icons/security_dslnfa.svg'
          secondUrl='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/icons/eye-slash_ygsqvr.svg'
          onChangeText={(text) => collection(text, 'password')}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.link}>
        <StyledLink
          text='¿Olvidaste tu contraseña?'
          action={() => nav('Register')}
        />
      </View>
      <View style={styles.buttons}>
        <StyledButton
          type='primary'
          text='Iniciar Sesión'
          action={() => sendForm()}
        />
      </View>
      <View style={styles.link}>
        <StyledText>¿No eres miembro? </StyledText>
        <StyledLink text='Registrate' action={() => nav('Register')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginTop: Constants.statusBarHeight,
    marginBottom: Constants.bottomTabBarHeight,
    height: '100%',
    width: '100%',
    gap: 15,
    backgroundColor: theme.colors.primary,
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '90%',
    marginTop: 30,
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: '90%',
    marginBottom: 20,
  },
});

export default LoginScreen;
