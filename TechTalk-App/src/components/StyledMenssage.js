import StyledText from './StyledText.js';
import { Svg, Path, Defs, ClipPath } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';

const StyledMenssage = () => {
  return (
    <View style={{ ...styles.container, alignSelf: 'flex-end' }}>
      <StyledText>hola</StyledText>
    </View>
  );
};
export default StyledMenssage;
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '70%',
    minHeight: 50,
    padding: 10,
    marginHorizontal: 10,
    backgroundColor: theme.colors.third,
  },
});
