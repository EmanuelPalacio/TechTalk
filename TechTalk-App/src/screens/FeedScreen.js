import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import theme from '../themes/theme.js';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import getUsers from '../services/getUsers.js';
import FeedItem from '../components/FeedItem.js';


const FeedScreen = () => {
    const { user } = useSelector((store) => store.auth);
    const [ users, setUsers ] = useState(null);

// traer todos los usuarios
    useEffect(() => {
        async function request () {
        const data =  await getUsers()
        setUsers(data)
        }
        request()
    }, [user])

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.root}
        data={users}
        renderItem={({ item }) => (
            <FeedItem
            conectUser={item}
            />
            )}
            keyExtractor={(item) => item._id}
            />
    </View>
  )
}

// renderItem={({ item }) => (
//     <Text>{item.fullname}</Text>
// )}
export default FeedScreen;

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
