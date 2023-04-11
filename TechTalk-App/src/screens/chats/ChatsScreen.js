import { View, Text, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
//import ChatListItem from '../../components/ChatListItem'
import { socket } from '../../services/socketConnect.js';
import { useIsFocused } from '@react-navigation/native';
import ChatListItem from './ChatListItem.js';

const ChatsScreen = () => {
  // conecta socket
  socket.connect()
  // traer el usuario logueado
  const { user } = useSelector((store) => store.auth.user);
  console.log('chatscreen user : ', user);

  const isFocused = useIsFocused();
  const [conversations, setConversations] = useState(null);

  // escucha si entra mensaje
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
    socket.emit('getConv', user._id);
    socket.on('sendConv', (data) => {
      setConversations(data);
      console.log('useEffect data : ', data);
    });
  }, [user._id, isFocused]);

  return (
    <View>
      <FlatList
        data={conversations}
        renderItem={({ item }) => <ChatListItem conversations={conversations} user={user}/>}
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default ChatsScreen;
