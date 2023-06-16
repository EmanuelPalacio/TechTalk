import { createStackNavigator } from '@react-navigation/stack';
import navRoutes from '../models/navigationRoutes';
import { ActivitiesScreen, LearningScreen } from '../screens';

function LearningNavigation() {
  const Learning = createStackNavigator();

  return (
    <Learning.Navigator initialRouteName={navRoutes.learningRoutes.home}>
      <Learning.Screen
        name={navRoutes.learningRoutes.home}
        component={LearningScreen}
      />
      <Learning.Screen
        name={navRoutes.learningRoutes.activities}
        component={ActivitiesScreen}
      />
    </Learning.Navigator>
  );
}
export default LearningNavigation;
