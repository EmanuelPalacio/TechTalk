import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: theme.color.primary,
    gap: 20,
  },
  titleAndLogo: {
    alignItems: 'center',
    gap: 20,
  },
  title: {
    flexDirection: 'row',
  },
  robot: {
    aspectRatio: 289 / 310, // Proporción original de la SVG, al declarar esta propiedad puedo modificar solo altura o ancho y que se ajuste automaticamente. La svg no tiene que tener alto y ancho declarados.
    height: '40%',
  },
  navigation: {
    gap: 10,
  },
  navRegister: {
    alignSelf: 'flex-end',
  },
});
export default styles;
