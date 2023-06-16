import { TouchableOpacity, Text } from 'react-native';
import styles from './styleButton';

export default function StyledButton({
  children,
  alternativeSize,
  second,
  bold,
  reversedBorder,
  onPress,
  restStyleBtnProps,
}) {
  const textConfig = [
    styles.defaultText,
    alternativeSize && styles.alternativeSize,
    second && styles.secondText,
    bold && styles.bold,
  ];
  const btnConfig = [
    styles.defaultBtn,
    second && styles.secondBtn,
    reversedBorder && styles.reversedBorder,
    restStyleBtnProps,
  ];
  return (
    <TouchableOpacity style={btnConfig} onPress={onPress}>
      <Text style={textConfig}>{children}</Text>
    </TouchableOpacity>
  );
}
