import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import ComingSoonScreen from '../screens/ComingSoonScreen.js';
import ActivitiesScreen from '../screens/ActivitiesScreen.js';

const Stack = createNativeStackNavigator();

const ActivitiesNavegation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      initialRouteName='Activities'
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name='Activities' component={ActivitiesScreen} />
      <Stack.Screen name='Reading' component={ComingSoonScreen} />
    </Stack.Navigator>
  );
};
export default ActivitiesNavegation;
