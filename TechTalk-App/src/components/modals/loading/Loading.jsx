import { Modal, View } from 'react-native';
import { SvgUri } from 'react-native-svg';
import styles from './loadingStyle';

export default function Loading() {
  return (
    <Modal animationType='slide'>
      <View style={styles.container}>
        <SvgUri uri='https://res.cloudinary.com/di1g1ylxi/image/upload/v1684247999/TechTalk/Logo_a9fmsp.svg' />
      </View>
    </Modal>
  );
}
