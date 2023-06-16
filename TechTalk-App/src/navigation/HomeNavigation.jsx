import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import navRoutes from '../utils/navigationRoutes';
import { HomeScreen, LoginScreen, RegisterScreen } from '../screens';
import LoginAlert from '../components/modals/loginAlert/LoginAlert';

function HomeNavigation() {
  const Home = createStackNavigator();
  const user = useSelector((store) => store.user);

  return (
    <>
      <Home.Navigator
        initialRouteName={navRoutes.homeRoutes.home}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Home.Screen name={navRoutes.homeRoutes.home} component={HomeScreen} />
        <Home.Screen
          name={navRoutes.homeRoutes.login}
          component={LoginScreen}
        />
        <Home.Screen
          name={navRoutes.homeRoutes.register}
          component={RegisterScreen}
        />
      </Home.Navigator>
      {user.error ? <LoginAlert error={user.error} /> : null}
    </>
  );
}
export default HomeNavigation;
