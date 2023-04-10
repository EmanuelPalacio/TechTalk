import { useState, useEffect, useCallback } from "react";
import { View } from "react-native";
import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { IconButton, AddIcon } from "native-base";
import { size } from "lodash";
import { Chat } from "../../api";
import { useAuth } from "../../hooks";
import { LoadingScreen } from "../../components/Shared";
//import { ListChat, Search } from "../../components/Chat";
import { screens } from "../../utils";
//import ChatListItem from "../../components/ChatListItem/index.js";

const chatController = new Chat();

export function ChatsScreen({user}) {
  const { accessToken } = useAuth();
  //const navigation = useNavigation();
  const [chats, setChats] = useState(null);
  const [chatsResult, setChatsResult] = useState(null);
  const [reload, setReload] = useState(false);

  const onReload = () => setReload((prevState) => !prevState);

  // useEffect(() => {
  //   navigation.setOptions({
  //     headerRight: () => (
  //       <IconButton
  //         icon={<AddIcon />}
  //         padding={0}
  //         onPress={() =>
  //           navigation.navigate(screens.tab.chats.createChatScreen)
  //         }
  //       />
  //     ),
  //   });
  // }, []);

  
    useEffect(() => {
      const getChat = async () => {
        try {
          const response = await chatController.getAll(user.user_id);
          const result = response.sort((a, b) => {
            return (
              new Date(b.last_message_date) - new Date(a.last_message_date)
            );
          });

          setChats(result);
          setChatsResult(result);
        } catch (error) {
          console.error(error);
        }
        getChat();
      }
    }, [])

  const upTopChat = (chatId) => {
    const data = chatsResult;
    const formIndex = data.map((chat) => chat._id).indexOf(chatId);
    const toIndex = 0;

    const element = data.splice(formIndex, 1)[0];

    data.splice(toIndex, 0, element);
    setChats([...data]);
  };

  // if (!chatsResult) return <LoadingScreen />;

  return (
    <View>
      {/* {size(chats) > 0 && <Search data={chats} setData={setChatsResult} />} */}
      {/* <ListChat
        chats={size(chats) === size(chatsResult) ? chats : chatsResult}
        onReload={onReload}
        upTopChat={upTopChat}
      /> */}
      <FlatList
        data={chats}
        renderItem={({item}) => <Text>{item}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}
//<ChatListItem chatData={item} />