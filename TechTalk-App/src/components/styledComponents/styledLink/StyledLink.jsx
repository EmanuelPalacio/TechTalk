import { Text, TouchableOpacity } from 'react-native';
import styles from './styleLink';

export default function StyledLink({ children, link, styleProps }) {
  return (
    <TouchableOpacity style={styleProps} onPress={link}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
