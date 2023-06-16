/* eslint-disable global-require */
/* eslint-disable react/style-prop-object */
// External imports
import { useCallback } from 'react';
import Constants from 'expo-constants';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
// Local file imports
import { store } from './store/store';
import RootNavegation from './navigation/RootNavigation';
import theme from './theme/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Orbitron-Regular': require('../assets/fonts/Orbitron-Regular.ttf'),
    'Orbitron-Bold': require('../assets/fonts/Orbitron-Bold.ttf'),
    'Lato-Bold': require('../assets/fonts/Lato-Bold.ttf'),
    'Lato-Regular': require('../assets/fonts/Lato-Regular.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const styles = {
    container: {
      flex: 1,
      marginTop: Constants.statusBarHeight,
    },
  };
  return (
    <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
      <StatusBar
        hidden={false}
        style='auto'
        backgroundColor={theme.color.primary}
      />
      <Provider store={store}>
        <RootNavegation />
      </Provider>
    </SafeAreaView>
  );
}
