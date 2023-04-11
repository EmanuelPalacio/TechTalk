import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact.js';
import { useEffect } from 'react';
import { socket } from '../services/socketConnect.js';
import { updateConversation } from '../store/conversation/conversation.js';

const ContactScreen = () => {
  const { conversation } = useSelector((store) => store.conversation);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    socket.emit('getConv', user._id);
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
  }, [dispatch, user]);

  return (
    <View style={styles.container}>
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
    </View>
  );
};
export default ContactScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.primary,
    minHeight: '100%',
  },
  list: {
    paddingHorizontal: 10,
    width: '100%',
    minHeight: '100%',
  },
});
