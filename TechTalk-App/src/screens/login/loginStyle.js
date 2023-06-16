import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    paddingTop: 10,
    paddingHorizontal: 15,
    backgroundColor: theme.color.primary,
  },
  header: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: '50%',
  },
  robot: {
    aspectRatio: 289 / 310, // Proporción original de la SVG, al declarar esta propiedad puedo modificar solo altura o ancho y que se ajuste automaticamente. La svg no tiene que tener alto y ancho declarados.
    height: '40%',
  },
  form: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    gap: 15,
  },
  forgotPass: {
    alignSelf: 'flex-end',
  },
  register: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
});
export default styles;
