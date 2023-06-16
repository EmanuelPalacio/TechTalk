import { Image, TouchableOpacity } from 'react-native';
import StyledText from '../styledText/StyledText';
import styles from './styleCard';

export default function CardContact({ name, img, onPress }) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image
        style={styles.image}
        source={{
          uri: img,
        }}
      />
      <StyledText fontSize='subTitle' bold color='third'>
        {name}
      </StyledText>
    </TouchableOpacity>
  );
}
