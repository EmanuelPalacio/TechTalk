import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ActivitiesScreen from '../screens/ActivitiesScreen.js';
import SelectedActivityScreen from '../screens/SelectedActivitySecreen.js';
import ActivityToSolve from '../screens/ActivityToSolve.js';
import ResolverActivity from '../screens/ResolverActivity.js';

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
      <Stack.Screen name='resolvedActivity' component={ResolverActivity} />
    </Stack.Navigator>
  );
};
export default ActivitiesNavegation;
