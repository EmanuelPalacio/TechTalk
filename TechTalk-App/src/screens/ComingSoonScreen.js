import { Image, StyleSheet, View } from 'react-native';
import StyledText from '../components/StyledText.js';

export default function ComingSoonScreen() {
  return (
    <View style={styles.screen}>
      <StyledText fontSize='title' fontWeight='bold' color='third'>
        En construcción...
      </StyledText>
      <Image
        source={{
          uri: 'https://res.cloudinary.com/dshfifpgv/image/upload/v1680781051/Images%20proyect%20techTalk/TechTalkAssets/TabIcons/ConectarSelected_xb0jdv.png',
        }}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
