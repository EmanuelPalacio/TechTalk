import {
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import { SvgUri } from 'react-native-svg';
import theme from '../themes/theme.js';
import StyledText from './StyledText.js';

const CardSelectActivity = ({ url, name, nav, level }) => {
  const windowWidth = useWindowDimensions().width;
  const height = windowWidth * 0.4;
  return (
    <TouchableOpacity
      style={{ ...styles.container, height }}
      delayLongPress={500}
      onPress={nav}
    >
      <View style={styles.level}>
        <StyledText fontWeight='bold' color='secondary'>
          {level}
        </StyledText>
      </View>
      <SvgUri style={styles.image} uri={url} />
      <View style={styles.containerText}>
        <StyledText fontWeight='bold' color='secondary'>
          {name}
        </StyledText>
      </View>
    </TouchableOpacity>
  );
};
export default CardSelectActivity;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    borderWidth: 4,
    borderColor: theme.colors.secondary,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 20, // Agregar un margen inferior al último CardActivity
  },
  image: {
    marginTop: 20,
    resizeMode: 'contain',
    width: '80%',
    height: '70%',
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    minHeight: '30%',
    backgroundColor: theme.colors.secondary,
    paddingHorizontal: 5,
  },
  level: {
    position: 'absolute',
    right: 5,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.third,
  },
});
