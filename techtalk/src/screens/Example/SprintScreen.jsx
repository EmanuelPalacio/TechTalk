import { View, Text, Image, Button } from 'react-native'
import React from 'react'
import Robot from '../../../assets/robotSaluda.png'
import { useAuthStore } from '../../hooks/useAuthStore'
import { useSelector } from 'react-redux';

export const SprintScreen = () => {
   const{startLogOut}=useAuthStore()
   
   const{status, user, token}=useSelector(state=>state.auth)
   

  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image source={Robot} style={{width:120,height:150}} />
      <Text>Bienvenido !</Text>
      <Text style={{fontSize:23, fontWeight:'600', marginBottom:15}}>Nuestro codigo funciona por el momento 👍  {user.fullname}</Text>
      <Button title='logout' color='red' onPress={startLogOut} />
    </View>
  )
}

