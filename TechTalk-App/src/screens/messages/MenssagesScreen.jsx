import { useState } from 'react';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Alert,
  Image,
} from 'react-native';
import {
  requestCameraPermissionsAsync,
  launchCameraAsync,
} from 'expo-image-picker';
import styles from './styleMesagges';
import { Camera } from '../../components/svgComponents';

export default function MenssagesScreen({ route }) {
  const [pickedUrl, setPickedUrl] = useState(null);
  console.log(
    '🚀 ~ file: MenssagesScreen.jsx:20 ~ MenssagesScreen ~ pickedUrl:',
    pickedUrl
  );

  const verifyPermissions = async () => {
    const { status } = await requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permiso denegado',
        'Necesitamos permisos para usar la camara',
        [{ text: 'Ok' }]
      );
      return false;
    }

    return true;
  };

  const onHandleTakeImage = async () => {
    const isCameraPermission = await verifyPermissions();
    if (!isCameraPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: false,
      aspect: [16, 9],
      quality: 0.7,
    });

    setPickedUrl(image.uri);
  };

  return (
    <View style={styles.container}>
      {/* <FlatList contentContainerStyle={styles.list} /> */}
      <View style={styles.preview}>
        {pickedUrl && (
          <Image style={styles.image} source={{ uri: pickedUrl }} />
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
        <TouchableOpacity onPress={onHandleTakeImage}>
          <Camera />
        </TouchableOpacity>
      </View>
    </View>
  );
}
