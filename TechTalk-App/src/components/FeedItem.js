import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import StyledText from './StyledText.js';
import theme from '../themes/theme.js';
import { useNavigation } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { socket } from '../services/socketConnect.js';
import { addConversation } from '../store/conversation/conversation.js';
import { useEffect, useState } from 'react';

const FeedItem = ({ conectUser }) => {
  const navigation = useNavigation();
  const { user } = useSelector((store) => store.auth);
  const [newConv, setNewConv] = useState(null);
  const dispatch = useDispatch();

  /* useEffect(() => {
    console.log('useEfe conv : ', newConv);
    if (newConv !== null) {
      dispatch(addConversation(newConv));
    }
  }, [dispatch, newConv]); */

  const createConv = () => {
    //busco si tengo conversation con contacto seleccionado
    socket.emit('getConvTwoUsers', user._id, conectUser._id);
    socket.on('sendConvTwoUsers', (data) => {
      const idConversation = data._id;
      const newConv = {
        idConversation: idConversation,
        contact: data,
      };
      setNewConv(newConv);
      console.log('New Conv : ', newConv);

      navigation.navigate('Menssages', {
        idConversation: idConversation,
        contactName: conectUser.fullname,
      });
    });
  };

  return (
    <TouchableOpacity
      style={styles.container}
      delayLongPress={500}
      onPress={() => createConv()}
    >
      <Image
        style={styles.image}
        source={{
          uri: conectUser.image.url,
        }}
      />
      <View style={styles.containeruser}>
        <StyledText fontWeight='bold' fontSize='subheading'>
          {conectUser.fullname}
        </StyledText>
        <StyledText fontWeight='normal' fontSize='body'>
          <Image
            style={styles.performance}
            source={{
              uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1681407729/Images%20proyect%20techTalk/TechTalkAssets/icons/HighConnection_qwqkem.png',
            }}
          />{' '}
          {conectUser.performance ? conectUser.performance : '10'}
        </StyledText>
      </View>
      <View style={styles.containericons}>
        <Image
          style={styles.flag}
          source={{
            uri: conectUser.country
              ? conectUser.country
              : 'https://t4.ftcdn.net/jpg/01/06/07/43/240_F_106074343_rDq3QWNlgK6lQWI5BbgwoY5AM5D3qIDY.jpg',
          }}
        />
        <Image
          style={styles.chat}
          source={{
            uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1681404800/Images%20proyect%20techTalk/TechTalkAssets/icons/chat-conversation-speak-_ucsjgf.png',
          }}
        />
      </View>
    </TouchableOpacity>
  );
};
export default FeedItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 100,
    width: '90%',
    marginVertical: 5,
    borderColor: theme.colors.secondaryTransparency,
    borderWidth: 1,
    borderRadius: 20,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginHorizontal: 20,
  },
  containeruser: {
    flexDirection: 'column',
  },
  containericons: {
    flexDirection: 'column',
    padding: 15,
    justifyContent: 'space-around',
  },
  chat: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  flag: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  performance: {
    width: 15,
    height: 15,
  },
});
