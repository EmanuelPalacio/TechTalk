import { StyleSheet, View } from 'react-native';
import StyledText from '../components/StyledText.js';
import theme from '../themes/theme.js';
import { SvgUri } from 'react-native-svg';
import StyledButton from '../components/StyledButton.js';
import { useNavigation } from '@react-navigation/native';

const ResolverActivity = ({ route }) => {
  const { compare, numberQuestions } = route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <StyledText fontSize='title' fontWeight='bold' color='fourth'>
          ¡Buen intento!
        </StyledText>
        <StyledText fontSize='subheading'>
          No te preocupes, con practica todo se logra
        </StyledText>
      </View>
      <View style={styles.image}>
        <SvgUri
          height='100%'
          resizeMode='contain'
          uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1681822844/Images%20proyect%20techTalk/TechTalkAssets/CuestionsRobot_pwvvvj.svg'
        />
      </View>
      <StyledText fontSize='title' fontWeight='bold' color='fourth'>
        {compare}/{numberQuestions}
      </StyledText>
      <View style={styles.containerButtons}>
        <StyledButton
          type='primary'
          text='Repetir'
          action={() => {
            navigation.goBack();
          }}
        />
        <StyledButton
          type='secondary'
          text='Regresar'
          action={() => {
            navigation.navigate('selectedActivity');
          }}
        />
      </View>
    </View>
  );
};
export default ResolverActivity;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
  },
  containerTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  image: {
    height: '40%',
  },
  containerButtons: {
    gap: 10,
  },
});
