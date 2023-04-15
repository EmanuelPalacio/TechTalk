import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

import theme from '../themes/theme.js';
import StyledText from './StyledText.js';

const CardActivity = ({ url, name, nav }) => {
  return (
    <TouchableOpacity
      style={styles.container}
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
export default CardActivity;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '80%',
    height: 300,
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
