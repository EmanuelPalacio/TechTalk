import { SvgUri } from 'react-native-svg';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './homeStyle';
import { StyledButton, StyledText } from '../../components/styledComponents';
import { navigationRoutes } from '../../utils';
import { HiRobot } from '../../components/svgComponents';

function HomeScreen() {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.titleAndLogo}>
        <SvgUri uri='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684247999/TechTalk/Logo_a9fmsp.svg' />
        <View style={styles.title}>
          <StyledText bold fontSize='title' titleFont>
            ¡Bienvenido a{' '}
          </StyledText>
          <StyledText bold fontSize='title' color='third' titleFont>
            TechTalk!
          </StyledText>
        </View>
      </View>
      <View style={styles.robot}>
        <HiRobot />
      </View>
      <View style={styles.navigation}>
        <StyledButton
          onPress={() => navigate(navigationRoutes.homeRoutes.login)}
        >
          Iniciar Sesión
        </StyledButton>
        <StyledButton
          second
          reversedBorder
          onPress={() => navigate(navigationRoutes.homeRoutes.register)}
        >
          Regístrate
        </StyledButton>
      </View>
    </View>
  );
}
export default HomeScreen;
