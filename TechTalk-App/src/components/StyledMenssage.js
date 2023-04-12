import StyledText from './StyledText.js';
import { StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useSelector } from 'react-redux';

const StyledMenssage = ({ data }) => {
  const { user } = useSelector((store) => store.auth);
  console.log(data);
  return (
    <View
      style={{
        ...styles.container,
        backgroundColor:
          data.sender === user._id
            ? theme.colors.secondaryTransparency
            : theme.colors.third,
        alignSelf: data.sender === user._id ? 'flex-end' : 'flex-start',
      }}
    >
      <StyledText>{data.text}</StyledText>
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
  },
}); 