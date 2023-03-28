import { View, Text, Image, StyleSheet,TextInput, TouchableOpacity,Platform } from 'react-native'
import React, { useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';
import AuthLayout from '../../layout/AuthLayout';
const SignInScreen = () => {
  const[secure,setSecure]= useState(true)
  const navigation = useNavigation()
  const toggle = ()=>{
    setSecure(!secure)
  }
  return (
    <AuthLayout title='title1'>
       <View style={Platform.OS === 'android' ? {marginTop:20}: {marginTop:30}}> 
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
                secureTextEntry={secure}
                style={styles.input}
                  />
                <Entypo name="eye-with-line" size={24} color="black" style={{position:'absolute', top:16 , right: 10}} onPress={toggle} />
         </View>
         <Text style={{fontSize:14, color:'#296ABD', fontWeight:'500', alignSelf:'flex-end'}}>¿Olvidaste tu contraseña?</Text>
         <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')} >
           <Text style={{color:'white', fontWeight:'bold'}}>Iniciar Sesion</Text>
          </TouchableOpacity>
          <View style={{flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
            <Text style={{fontSize:14}}>¿No eres miembro?</Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
              <Text style={{fontSize:14,color:'#296ABD'}}>Registrate</Text>
            </TouchableOpacity> 
          </View>       
      </View>
    </AuthLayout>
  )
}

const styles = StyleSheet.create({
  container:{
    justifyContent:'center',
    alignItems:'center',
},
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
  button1:{
    width:320,
    height:60,
    padding:10,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center', 
    marginBottom:8,
    borderWidth:1,
    borderColor:'black'

  }

})
export default SignInScreen