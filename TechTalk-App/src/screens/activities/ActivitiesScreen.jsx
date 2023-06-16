import { View } from 'react-native';
import { StyledText } from '../../components/styledComponents';

export default function ActivitiesScreen({ route }) {
  return (
    <View>
      <StyledText>{route.params.learning}</StyledText>
    </View>
  );
}
