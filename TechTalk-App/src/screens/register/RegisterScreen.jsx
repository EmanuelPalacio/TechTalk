import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import {
  Email,
  Eye,
  Key,
  Person,
  Phone,
  RegisterRobot,
} from '../../components/svgComponents';
import {
  StyledButton,
  StyledInput,
  StyledText,
} from '../../components/styledComponents';
import styles from './styleRegister';
import { navigationRoutes } from '../../utils';
import StyledLink from '../../components/styledComponents/styledLink/StyledLink';
import useDataCollection from '../../hooks/useDataCollection';
import { register } from '../../store/reducers/userReducer';

export default function RegisterScreen() {
  const dispatch = useDispatch();
  const { navigate } = useNavigation();
  const [data, setData] = useDataCollection({
    name: '',
    email: '',
    password: '',
    phone: '',
  });
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.RegisterRobot}>
          <RegisterRobot />
        </View>
        <StyledText bold color='third' titleFont fontSize='title'>
          ¡Registrate!
        </StyledText>
        <StyledText fontSize='subTitle'>
          Ingresa tus datos para comenzar
        </StyledText>
      </View>
      <View style={styles.form}>
        <StyledInput
          icon={<Person />}
          placeholder='Ingrese su nombre'
          onChange={setData}
          name='name'
        />
        <StyledInput
          icon={<Email />}
          placeholder='Ingrese su email'
          onChange={setData}
          name='email'
        />
        <StyledInput
          icon={<Phone />}
          placeholder='Ingrese su numero'
          onChange={setData}
          name='phone'
        />
        <StyledInput
          icon={<Key />}
          placeholder='Ingrese su contraseña'
          password
          secondIcon={<Eye />}
          name='password'
          onChange={setData}
        />
        <StyledButton onPress={() => dispatch(register(data))}>
          Registrarse
        </StyledButton>
        <View style={styles.login}>
          <StyledText fontSize='small'>¿Ya eres miembro? </StyledText>
          <StyledLink link={() => navigate(navigationRoutes.homeRoutes.login)}>
            Inicia sesión
          </StyledLink>
        </View>
      </View>
    </View>
  );
}
