import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderBottomWidth: 2,
    borderColor: theme.color.secondary,
    opacity: 0.4,
  },
  inputContainerFocus: {
    opacity: 1,
  },
  icon: {
    width: '10%',
    height: 30,
  },
  secondIcon: {
    position: 'absolute',
    top: 10,
    right: 0,
    width: '10%',
    height: 30,
    opacity: 0.4,
  },
  seconIconOpacitiy: {
    opacity: 1,
  },
  input: {
    width: '90%',
    paddingHorizontal: 10,
    fontSize: theme.fontSizes.text,
    color: theme.colorText.primaryText,
  },
});
export default styles;
