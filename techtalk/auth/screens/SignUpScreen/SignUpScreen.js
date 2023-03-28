import { View, Text, Platform, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import AuthLayout from '../../layout/AuthLayout'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

const SignUpScreen = () => {
  const[secure,setSecure]= useState(true)
  const navigation = useNavigation()
  const toggle = ()=>{
    setSecure(!secure)
  }
  return (
    <AuthLayout title='title2'>
        <View style={Platform.OS === 'android' ? {marginTop:20}: {marginTop:30}}>
        <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Ingrese su nombre'
                style={styles.input}
                  />
         </View> 
      <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Enter your email'
                style={styles.input}
                  />
                <MaterialIcons name="mail-outline" size={24} color="black" style={{position:'absolute', top:16 , right: 10}} />
         </View>
         <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Ingrese su contraseña'
                style={styles.input}
                secureTextEntry={secure}
                  />
                <Entypo name="eye-with-line" size={24} color="black" style={{position:'absolute', top:16 , right: 10}} onPress={toggle} />
         </View>
         <TouchableOpacity style={styles.button} >
           <Text style={{color:'white', fontWeight:'bold'}}>Registrarse</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
            <Text style={{fontSize:14}}>Ya tienes cuenta</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignIn')}}>
              <Text style={{fontSize:14,color:'#296ABD'}}>Inicia sesion</Text>
            </TouchableOpacity> 
          </View>       
      </View>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  input:{
    width: 320,
    height:60,
    padding:10,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    borderWidth:1,
    borderColor:'black',
    marginBottom: 8
  },
  inputContainer:{
    marginBottom:10,
  },
  button:{
    width:320,
    height:60,
    padding:10,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center', 
    backgroundColor:'#2D4C7E',
    marginTop:10,
    marginBottom:8
  },
})

export default SignUpScreen