import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';

import theme from '../themes/theme.js';
import StyledText from './StyledText.js';

const CardSelectActivity = ({ url, name, nav, level, idActivity }) => {
  const windowWidth = useWindowDimensions().width;
  const height = windowWidth * 0.4;
  return (
    <TouchableOpacity
      style={{ ...styles.container, height }}
      delayLongPress={500}
      onPress={nav}
    >
      <Image style={styles.image} source={{ uri: url }} />
      <View style={styles.containerText}>
        <StyledText fontSize='subheading' fontWeight='bold' color='secondary'>
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
    width: '100%',
    maxHeight: '30%',
    backgroundColor: theme.colors.secondary,
  },
});
