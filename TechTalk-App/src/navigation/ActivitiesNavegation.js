import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ComingSoonScreen from '../screens/ComingSoonScreen.js';
import ActivitiesScreen from '../screens/ActivitiesScreen.js';
import SelectedActivityScreen from '../screens/SelectedActivitySecreen.js';
import StyledText from '../components/StyledText.js';
import ActivityToSolve from '../screens/ActivityToSolve.js';

const Stack = createNativeStackNavigator();

const ActivitiesNavegation = () => {
  return (
    <Stack.Navigator
      initialRouteName='Activities'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Activities' component={ActivitiesScreen} />
      <Stack.Screen
        name='selectedActivity'
        component={SelectedActivityScreen}
      />
      <Stack.Screen name='activityToSolve' component={ActivityToSolve} />
    </Stack.Navigator>
  );
};
export default ActivitiesNavegation;
