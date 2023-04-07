import { StyleSheet, View, Image } from 'react-native';

export default function ComingSoonScreen() {
  return (
    <View style={styles.screen}>
      <Image
        style={styles.image}
        source={{
          uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680795518/Images%20proyect%20techTalk/TechTalkAssets/En_construcci%C3%B3n..._dyr0xj.jpg',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  image: {
    resizeMode: 'contain',
    height: '100%',
    width: '80%',
  },
});
