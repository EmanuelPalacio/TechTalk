import { Text } from 'react-native';
import styles from './styleText';

export default function StyledText({
  children,
  bold,
  fontSize,
  color,
  fontTitle,
  restStyledProps,
}) {
  const settings = [
    styles.default,
    fontSize === 'small' && styles.smallText,
    fontSize === 'title' && fontTitle && styles.title,
    fontSize === 'title' && !fontTitle && styles.titleText,
    fontSize === 'subTitle' && fontTitle && styles.subTitle,
    fontSize === 'subTitle' && !fontTitle && styles.subTitleText,
    bold && !fontTitle && styles.boldText,
    bold && fontTitle && styles.boldTitle,
    color === 'second' && styles.second,
    color === 'third' && styles.third,
    restStyledProps,
  ];

  return <Text style={settings}>{children}</Text>;
}
