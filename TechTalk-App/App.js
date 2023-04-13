import { Provider } from 'react-redux';
import { store } from './src/store/store.js';
import RootNavigation from './src/navigation/RootNavigation.js';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar hidden={false} style='auto' />
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </SafeAreaView>
  );
}
