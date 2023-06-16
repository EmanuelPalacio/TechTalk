import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    minHeight: '100%',
    backgroundColor: theme.color.primary,
    paddingHorizontal: 15,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
  },
  RegisterRobot: {
    aspectRatio: 1,
    height: '50%',
  },
  form: {
    gap: 15,
    alignItems: 'center',
  },
  login: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
  },
});
export default styles;
