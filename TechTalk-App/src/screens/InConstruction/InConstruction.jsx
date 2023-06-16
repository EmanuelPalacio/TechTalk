import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { RobotPlaying } from '../../components/svgComponents';
import { StyledText } from '../../components/styledComponents';
import styles from './stylesConstruction';

export default function InConstruction() {
  const user = useSelector((store) => store.user);
  console.log('🚀 ~ file: InConstruction.jsx:9 ~ InConstruction ~ user:', user);
  return (
    <View style={styles.container}>
      <View style={styles.robot}>
        <RobotPlaying />
      </View>
      <StyledText color='third' fontSize='title'>
        Pagina en construcción
      </StyledText>
    </View>
  );
}
