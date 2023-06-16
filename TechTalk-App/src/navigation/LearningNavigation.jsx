import { createStackNavigator } from '@react-navigation/stack';
import { navigationRoutes } from '../utils';
import { ActivitiesScreen, LearningScreen } from '../screens';

function LearningNavigation() {
  const Learning = createStackNavigator();

  return (
    <Learning.Navigator initialRouteName={navigationRoutes.learningRoutes.home}>
      <Learning.Screen
        name={navigationRoutes.learningRoutes.home}
        component={LearningScreen}
      />
      <Learning.Screen
        name={navigationRoutes.learningRoutes.activities}
        component={ActivitiesScreen}
      />
    </Learning.Navigator>
  );
}
export default LearningNavigation;
