import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//import ChatListItem from '../../components/ChatListItem'
import { socket } from '../../services/socketConnect.js';
import { useIsFocused } from '@react-navigation/native';

const ChatsScreen = () => {
  // conecta socket
  socket.connect()
  // traer el usuario logueado
  const { user } = useSelector((store) => store.auth.user);
  console.log('chatscreen user : ', user);

  const isFocused = useIsFocused();
  const [conversations, setConversations] = useState(null);

  // llamar a socket connect para conectar con el server
  // inicia socket y escucha si entra mensaje
  useEffect(() => {
    socket.on('getMessage', (data) => {
      setArrivalMessage({
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  // buscar conversaciones
  useEffect(() => {
    socket.connect();
    socket.emit('getConv', user._id);
    socket.on('sendConv', (data) => {
      setConversations(data);
      console.log('useEffect data : ', data);
    });
  }, [user._id, isFocused]);

  //con FlatList mostrar las conversaciones

  //socket emit getconv iduser

  //server on responde el getconv busca conversation socket.on(getconv, ((id)=>{
  //socket.emit
  //})
  //server emit conversations
  //socket on de conversations

  return (
    <View>
      <FlatList
        data={conversations}
        renderItem={({ item }) => <Text>{item.users[0]}</Text>}
        keyExtractor={(item) => item._id}
      />
      {/* <ChatListItem id conversation/>  */}
    </View>
  );
};

export default ChatsScreen;
