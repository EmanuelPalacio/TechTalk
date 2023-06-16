import { Modal, View } from 'react-native';
import { useDispatch } from 'react-redux';
import styles from './styleLoginAlert';
import { StyledButton, StyledText } from '../../styledComponents';
import { RobotError } from '../../svgComponents';
import { resetError } from '../../../store/reducers/userReducer';

export default function LoginAlert({ error }) {
  const dispatch = useDispatch();
  return (
    <Modal animationType='slide'>
      <View style={styles.container}>
        <RobotError />
        <StyledText fontSize='title'>{error}</StyledText>
        <StyledButton onPress={() => dispatch(resetError())}>
          Volver a intentar
        </StyledButton>
      </View>
    </Modal>
  );
}
