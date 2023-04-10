import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'


const ChatListItem = ({ conversations, user }) => {
    const [otherUser, setOtherUser] = useState(null)

    //const { user } = useSelector(store => store.auth.user)
    console.log("chatscreen user : ", user)
    
    useEffect(() => {
        const friendId = conversations.users.find((m) => m !== user._id);
    
        const getUser = async () => {
          try {
            const res = await axios("/users?userId=" + friendId);
            setOtherUser(res.data);
          } catch (err) {
            console.log(err);
          }
        };
        getUser();
      }, [currentUser, conversation]);

  return (
    <View>
      <Text>ChatListItem</Text>
    </View>
  )
}

export default ChatListItem