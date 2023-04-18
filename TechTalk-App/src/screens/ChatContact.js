import { FlatList, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { socket } from '../services/socketConnect.js';
import StyledText from '../components/StyledText.js';
import StyledMenssage from '../components/StyledMenssage.js';
import { useNavigation } from '@react-navigation/core';
import StyledInput from '../components/StyledInput.js';
import useDataCollection from '../hooks/useDataCollection.js';

const ChatContact = ({ route }) => {
  const [value, collection, resetValues] = useDataCollection({
    text: '',
  });
  const navigation = useNavigation();
  const { idConversation, contactName } = route.params;
  const [messages, setMessages] = useState([]);
  const { user } = useSelector((store) => store.auth);

  const sendMenssage = () => {
    const message = {
      sender: user._id,
      text: value.text,
      idConversation,
    };
    socket.emit('sendMessage', message);
    setMessages((prevMessages) => [...prevMessages, message]);
    resetValues();
  };

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
    socket.on('getMessage', (newMessage) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
    console.log('chatContact', route);
  }, [idConversation]);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.list}
        data={messages}
        renderItem={({ item, index }) => (
          <StyledMenssage data={item} key={index} />
        )}
      />
      <View style={styles.input}>
        <StyledInput
          action={sendMenssage}
          onChangeText={(text) => collection(text, 'text')}
          value={value.text}
          placeholder='Ingrense su mensaje'
          secondUrl='https://res.cloudinary.com/dshfifpgv/image/upload/v1681262699/Images%20proyect%20techTalk/TechTalkAssets/icons/sendMenssage_ngdosu.svg'
        />
      </View>
    </View>
  );
};
export default ChatContact;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: theme.colors.primary,
    padding: 10,
  },
  list: {
    minWidth: '100%',
    manWidth: '100%',
    minheight: '100%',
    gap: 10,
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '95%',
    marginVertical: 15,
  },
});
