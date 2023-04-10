import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import Navigation from './src/navigation';
import { store } from './src/store/store';
import io from "socket.io-client";



export default function App() {
  
    const socket = io("http://192.168.0.4:9000");
    
    onConnectSocket = () => {
      if(socket) {
        
        socket.on('connect', () => {
          socket.emit('i-am-connected');
        });
      }
    }
    onConnectSocket();
  
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
