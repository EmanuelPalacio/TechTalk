import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { store } from './src/store/store';
import { initSockets } from "../utils";

initSockets();

export default function App() {
  
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
// <StatusBar style="auto" />

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
