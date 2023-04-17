import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useSelector } from 'react-redux';

export default function LoadScreen() {
  const { status } = useSelector((store) => store.loading);
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  useEffect(() => {
    if (status === 'fulfilled' && isFocused) {
      navigation.navigate('App');
    }
  }, [status, isFocused]);
  return (
    <View style={style.screen}>
      <SvgUri
        width='100%'
        uri='https://res.cloudinary.com/dshfifpgv/image/upload/v1680632381/Images%20proyect%20techTalk/TechTalkAssets/LogoTechTalk_y15vs5.svg'
      />
    </View>
  );
}
const style = StyleSheet.create({
  screen: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
});
