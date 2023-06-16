import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RobotEducation } from '../../components/svgComponents';
import { StyledText } from '../../components/styledComponents';
import styles from './styleLearning';
import navRoutes from '../../models/navigationRoutes';

export default function LearningScreen() {
  const { navigate } = useNavigation();
  const { reading, writing, speaking, listening, activities } =
    navRoutes.learningRoutes;
  const navigation = (route, param) => {
    navigate(route, { learning: param });
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <RobotEducation />
        <StyledText fontSize='subTitle' color='third' bold>
          ¿Qué deseas aprender?
        </StyledText>
      </View>
      <View style={styles.containerOptions}>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation(activities, reading)}
        >
          <StyledText fontSize='subTitle' color='second'>
            Reading
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation(activities, writing)}
        >
          <StyledText fontSize='subTitle' color='second'>
            Writing
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation(activities, speaking)}
        >
          <StyledText fontSize='subTitle' color='second'>
            Speaking
          </StyledText>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.option}
          onPress={() => navigation(activities, listening)}
        >
          <StyledText fontSize='subTitle' color='second'>
            Listening
          </StyledText>
        </TouchableOpacity>
      </View>
    </View>
  );
}
