import React from 'react';
import { View, FlatList, StyleSheet, ScrollView } from 'react-native';
import theme from '../themes/theme.js';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getUsers from '../services/getUsers.js';
import FeedItem from '../components/FeedItem.js';
import { socket } from '../services/socketConnect.js';
import { updateConversation } from '../store/conversation/conversation.js';

const FeedScreen = ({ route }) => {
  const { user } = useSelector((store) => store.auth);
  const [users, setUsers] = useState(null);
  const dispatch = useDispatch();

  // traer todos los usuarios
  useEffect(() => {
    const request = async () => {
      const data = await getUsers();
      const usersList = data.filter((e) => e._id !== user._id);
      setUsers(usersList);
      // busca las conversations del user logueado
    };
    request();
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
    return () => {
      socket.off('sendConv');
    };
  }, []);

  return (
    <FlatList
      contentContainerStyle={styles.container}
      style={styles.root}
      data={users}
      renderItem={({ item }) => <FeedItem conectUser={item} />}
      keyExtractor={(item) => item._id}
    />
  );
};

export default FeedScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary,
    minHeight: '100%',
  },
  list: {
    paddingHorizontal: 10,
    width: '100%',
    minHeight: '100%',
  },
});
