import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
    borderWidth: 1,
    borderColor: theme.color.secondary,
    borderRadius: 15,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: theme.color.secondaryLight,
    marginHorizontal: 20,
  },
});
export default styles;
