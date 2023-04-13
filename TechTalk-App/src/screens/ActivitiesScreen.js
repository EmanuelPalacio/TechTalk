import { StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';

const ActivitiesScreen = () => {
  return <View style={styles.container}></View>;
};
export default ActivitiesScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    backgroundColor: theme.colors.primary,
    padding: 10,
  },
});
