import { useNavigation } from '@react-navigation/native';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import { useSelector } from 'react-redux';

export default function LoadScreen({ route }) {
  const { status } = useSelector((store) => store.loading);
  const auth = useSelector((store) => store.auth);
  const navigation = useNavigation();
  const { timer } = route.params;

  useEffect(() => {
    if (timer && auth.status === 'unauthorized') {
      setTimeout(() => {
        navigation.navigate('Home');
      }, 3000);
    }
    if (status === 'fulfilled') {
      navigation.navigate('App');
    }
    console.log(status);
    console.log(auth.status);
  }, [status]);
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
