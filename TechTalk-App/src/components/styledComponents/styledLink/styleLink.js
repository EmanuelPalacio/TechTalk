import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  text: {
    fontFamily: theme.fontFamily.textRegular,
    fontSize: theme.fontSizes.small,
    color: theme.colorText.thirdText,
    textDecorationLine: 'underline',
  },
});
export default styles;
