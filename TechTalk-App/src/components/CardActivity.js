import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import theme from '../themes/theme.js';

const CardActivity = (url) => {
  return (
    <TouchableOpacity style={styles.container}>
      <SvgUri uri={url} />
    </TouchableOpacity>
  );
};
export default CardActivity;
const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.secondary,
  },
});
