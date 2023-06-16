import { StyleSheet, Dimensions } from 'react-native';
import theme from '../../theme/theme';

const windowWidth = Dimensions.get('window').width / 2 - 130 / 2;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    height: '30%',
  },
  background: {
    flex: 1,
    height: '70%',
  },
  profileImage: {
    position: 'absolute',
    aspectRatio: 1,
    width: 130,
    borderRadius: 130 / 2,
    right: windowWidth,
    top: '30%',
  },
  level: {
    position: 'absolute',
    backgroundColor: theme.color.secondary,
    padding: 10,
    borderRadius: 10,
    bottom: 0,
    right: 10,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    gap: 15,
  },
  card: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 50,
    width: '100%',
    borderRadius: 10,
    backgroundColor: theme.color.secondary,
  },
  infoUser: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginHorizontal: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: theme.color.secondary,
  },
});

export default styles;
