import { ScrollView, StyleSheet, View } from 'react-native';
import theme from '../themes/theme.js';
import StyledText from '../components/StyledText.js';
import { useSelector } from 'react-redux';
import Contact from '../components/Contact.js';

const ProfileScreen = () => {
  const { user } = useSelector((store) => store.auth);
  console.log(user.image);
  return (
    <ScrollView style={styles.root}>
      {/* reemplazar view por flatList */}
      <View style={styles.container}>
        <Contact />
      </View>
    </ScrollView>
  );
};
export default ProfileScreen;
const styles = StyleSheet.create({
  root: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: theme.colors.primary,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
