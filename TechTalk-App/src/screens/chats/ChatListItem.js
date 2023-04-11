import { View, Text, StyleSheet, Image } from 'react-native'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'


const ChatListItem = ({ conversations, user }) => {
    const [otherUser, setOtherUser] = useState(null)

    
    console.log("Conversations: ", conversations)
    
    
    

  return (
    <View>
    

        <Text>{conversations[0].users[0].fullname}</Text>

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