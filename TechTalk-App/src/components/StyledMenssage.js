import StyledText from './StyledText.js';
import { Svg, Path, Defs, ClipPath } from 'react-native-svg';
import { StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useSelector } from 'react-redux';

const StyledMenssage = ({data}) => {
  const { user } = useSelector((store) => store.auth);

  const isMyMessage = () => {
    return data.sender._id === user._id
  }

  return (
    <View style={{ ...styles.container,
      backgroundColor: isMyMessage ? theme.colors.secondaryTransparency : theme.colors.third,
      marginLeft: isMyMessage ? 50 : 0,
      marginRight: isMyMessage ? 0 :50 }}>
      <StyledText>{data.texto}</StyledText>
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
    
  },
});
