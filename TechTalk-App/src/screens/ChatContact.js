import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import { useDispatch, useSelector } from 'react-redux';
import Contact from '../components/Contact.js';
import { useEffect } from 'react';

import StyledText from '../components/StyledText.js';
import StyledMenssage from '../components/StyledMenssage.js';

const ChatContact = ({ route }) => {
  const { idConversation } = route.params;
  return (
    <View style={styles.root}>
      <StyledMenssage>hola</StyledMenssage>
    </View>
  );
};
export default ChatContact;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '100%',
    minHeight: '100%',
    backgroundColor: theme.colors.primary,
  },
  list: {
    width: '95%',
  },
});
