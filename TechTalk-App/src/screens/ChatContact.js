import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact.js';
import { useEffect, useState } from 'react';
import { socket } from '../services/socketConnect.js';
import StyledText from '../components/StyledText.js';
import StyledMenssage from '../components/StyledMenssage.js';
import { useNavigation } from '@react-navigation/core';
import { SvgUri } from 'react-native-svg';

const ChatContact = ({ route }) => {
  const navigation = useNavigation();
  const { idConversation, contactName } = route.params;
  const [messages, setMessages] = useState(null);

  console.log('idConversation : ', idConversation);

  // busco los mensajes de la conversation
  useEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <StyledText fontSize='subheading' fontWeight='bold'>
          {contactName}
        </StyledText>
      ),
    });
    socket.emit('getMessages', idConversation);
    socket.on('sendMessages', (data) => {
      setMessages(data);
    });
  }, []);

  // FlatList para mostrar mensaje
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={messages}
      renderItem={({ item }) => <StyledMenssage data={item} />}
      keyExtractor={(item) => item._id}
    />
  );
};
export default ChatContact;

const styles = StyleSheet.create({
  list: {
    padding: 10,
    width: '100%',
    minHeight: '100%',
    backgroundColor: theme.colors.primary,
    gap: 10,
  },
});
