import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ActivityIndicator} from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import { AuthNavigation } from '../auth/navigation/AuthNavigation';
import { useSelector } from 'react-redux';
import { SprintScreen } from '../screens/Example/SprintScreen';
import { ChatsScreen } from '../screens/Chats/ChatsScreen.js'

const Stack = createNativeStackNavigator();

const Navigation = () => {

  const{status, user}=useSelector(state=>state.auth)

  if(status === 'checking'){
    return(
      <ActivityIndicator color='blue' size={50} style={{justifyContent:'center', alignItems:'center'}} />
    )
  }
  return (
    <NavigationContainer>
      {status === 'unauthorized' 
      ?(
        <Stack.Navigator initialRouteName='Auth' screenOptions={{headerShown: false}}>
            
            <Stack.Screen name="Auth" component={AuthNavigation} />
        </Stack.Navigator>
      )
      : (
        <ChatsScreen user={user}/>
      )
    }
        
      
    </NavigationContainer>
  )
}

export default Navigation