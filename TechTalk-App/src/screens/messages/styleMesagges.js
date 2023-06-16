import { StyleSheet } from 'react-native';
import theme from '../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.color.primary,
  },
  list: {
    height: '70%',
    backgroundColor: 'transparent',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderWidth: 2,
    borderColor: theme.color.secondaryLight,
    borderRadius: 15,
    margin: 20,
  },
  input: {
    fontFamily: theme.fontFamily.textRegular,
    fontSize: theme.fontSizes.text,
    color: theme.colorText.primaryText,
    height: '100%',
    width: '80%',
    paddingHorizontal: 15,
  },
  preview: {
    height: '50%',
    width: '100%',
  },
  image: {
    flex: 1,
  },
});
export default styles;
