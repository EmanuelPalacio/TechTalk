import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact.js';
import { useEffect } from 'react';
import { socket } from '../services/socketConnect.js';
import { updateConversation } from '../store/conversation/conversation.js';
import { useIsFocused } from '@react-navigation/native';
import { SvgUri } from 'react-native-svg';
import StyledText from '../components/StyledText.js';

const ContactScreen = () => {
  const { conversation } = useSelector((store) => store.conversation);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const isFocused = useIsFocused();

  useEffect(() => {
    socket.emit('getConv', user._id);
  }, [isFocused]);

  useEffect(() => {
    socket.on('sendConv', (data) => {
      const contacAndConversation = data.map((item) => {
        const contact = item.users.find((elem) => elem._id !== user._id);
        return {
          idConversation: item._id,
          contact,
        };
      });
      dispatch(updateConversation(contacAndConversation));
    });
    return () => {
      socket.off('sendConv');
      console.log('se cerro');
    };
  }, []);

  return (
    <View style={styles.container}>
      {conversation.length === 0 ? (
        <View style={styles.image}>
          <SvgUri
            height='100%'
            resizeMode='contain'
            uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1681864953/Images%20proyect%20techTalk/TechTalkAssets/RobotTriste_yftxpc.svg'
          />
          <StyledText color='fourth' fontSize='subheading' fontWeight='bold'>
            No hay conversaciones iniciadas
          </StyledText>
        </View>
      ) : (
        <FlatList
          style={styles.root}
          data={conversation}
          renderItem={({ item }) => (
            <Contact
              contact={item.contact}
              idConversation={item.idConversation}
            />
          )}
          keyExtractor={(item) => item.idConversation}
        />
      )}
    </View>
  );
};
export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    minHeight: '100%',
  },
  root: {
    width: '90%',
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '40%',
    gap: 30,
  },
  list: {
    paddingHorizontal: 10,
    width: '100%',
    minHeight: '100%',
  },
});
