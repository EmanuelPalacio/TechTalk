import { createStackNavigator } from '@react-navigation/stack';
import navRoutes from '../utils/navigationRoutes';
import { ProfileScreen, RegisterScreen } from '../screens';

function ProfileNavigation() {
  const Profile = createStackNavigator();

  return (
    <Profile.Navigator
      initialRouteName={navRoutes.homeRoutes.home}
      screenOptions={{
        headerShown: true,
      }}
    >
      <Profile.Screen
        name={navRoutes.homeRoutes.login}
        component={ProfileScreen}
      />
      <Profile.Screen
        name={navRoutes.homeRoutes.register}
        component={RegisterScreen}
      />
    </Profile.Navigator>
  );
}
export default ProfileNavigation;
