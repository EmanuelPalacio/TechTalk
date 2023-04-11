import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import StyledText from './StyledText.js';
import theme from '../themes/theme.js';

const Contact = (user) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1681086310/Images%20proyect%20techTalk/TechTalkAssets/Defaut%20avatar%20profile/Avatar_bczsp0.jpg',
        }}
      />
      <StyledText fontWeight='bold' fontSize='subheading'>
        Emanuel Palacio
      </StyledText>
    </TouchableOpacity>
  );
};
export default Contact;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 100,
    width: '95%',
    marginVertical: 5,
    borderColor: theme.colors.secondaryTransparency,
    borderWidth: 1,
    borderRadius: 20,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginHorizontal: 20,
  },
});
