import { StyleSheet } from 'react-native';
import theme from '../../../theme/theme';

const styles = StyleSheet.create({
  default: {
    fontFamily: theme.fontFamily.textRegular,
    fontSize: theme.fontSizes.text,
    color: theme.colorText.primaryText,
  },
  second: {
    color: theme.colorText.secondaryText,
  },
  third: {
    color: theme.colorText.thirdText,
  },
  smallText: {
    fontSize: theme.fontSizes.small,
  },
  title: {
    fontFamily: theme.fontFamily.title,
    fontSize: theme.fontSizes.title,
  },
  subTitle: {
    fontFamily: theme.fontFamily.title,
    fontSize: theme.fontSizes.subTitle,
  },
  titleText: {
    fontSize: theme.fontSizes.title,
  },
  subTitleText: {
    fontSize: theme.fontSizes.subTitle,
  },
  boldText: {
    fontFamily: theme.fontSizes.textBold,
  },
  boldTitle: {
    fontFamily: theme.fontFamily.titleBold,
  },
});
export default styles;
