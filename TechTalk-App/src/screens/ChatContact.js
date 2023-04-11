import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact.js';
import { useEffect, useState } from 'react';
import { socket } from '../services/socketConnect.js';
import StyledText from '../components/StyledText.js';
import StyledMenssage from '../components/StyledMenssage.js';

const ChatContact = ({ route }) => {
  const { idConversation } = route.params;
  const [ messages, setMessages ] = useState(null)

console.log("idConversation : ", idConversation)
  
// busco los mensajes de la conversation
  useEffect(() => {
    console.log("idConversation en useEffect : ", idConversation)
    socket.emit('getMessages', idConversation);
    socket.on('sendMessages', (data) => {
      setMessages(data)
      console.log("Messages en useEffect : ", messages)
      });
  }, []);

  // FlatList para mostrar mensaje
  return (
    <View style={styles.root}>
      <FlatList 
        data={messages}
        renderItem={({ item }) => (
          <StyledMenssage
            data={item}
          />
        )}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};
export default ChatContact;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%',
    backgroundColor: theme.colors.primary,
  },
  list: {
    width: '95%',
  },
});
