import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


const ChatListItem = ({ conversations, user }) => {
    const [otherUser, setOtherUser] = useState(null)

    console.log("Conversations: ", conversations)

    const muestra = conversations.users?.map(item => item._id !== user._id)
    console.log("Muestra : ", muestra)

  return (
    <View>
        <Image
          source={{uri: conversations[0].users[0].image.url, width:20,height:20 }}
        />
        <Text>{conversations[0].users[0].fullname}</Text>
        <Text>{conversations[0].users[0]._id}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    tinyLogo: {
      width: 25,
      height: 25,
    }
  });

export default ChatListItem