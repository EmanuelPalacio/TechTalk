import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import StyledText from './StyledText.js';
import theme from '../themes/theme.js';
import { useNavigation } from '@react-navigation/native';

const Contact = ({ contact, idConversation }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate('Menssages', {
          idConversation,
          contactName: contact.fullname,
        })
      }
    >
      <Image
        style={styles.image}
        source={{
          uri: contact.image.url,
        }}
      />
      <StyledText fontWeight='bold' fontSize='subheading'>
        {contact.fullname}
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
    width: '100%',
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
