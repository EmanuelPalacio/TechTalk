import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {ActivityIndicator,View,Text} from 'react-native'
import HomeScreen from '../screens/HomeScreen'
import { AuthNavigation } from '../auth/navigation/AuthNavigation';
import { useSelector } from 'react-redux';
import { SprintScreen } from '../screens/Example/SprintScreen';


const Stack = createNativeStackNavigator();

const Navigation = () => {

  const{status}=useSelector(state=>state.auth)

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
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Auth" component={AuthNavigation} />
        </Stack.Navigator>
      )
      : (
        <SprintScreen />
      )
    }
        
      
    </NavigationContainer>
  )
}

export default Navigation