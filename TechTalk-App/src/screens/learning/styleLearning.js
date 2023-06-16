import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.color.primary,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerOptions: {
    width: '80%',
    marginTop: '10%',
    gap: 20,
  },
  option: {
    alignItems: 'center',
    borderRadius: 20,
    padding: 15,
    backgroundColor: theme.color.secondary,
  },
});
export default styles;
