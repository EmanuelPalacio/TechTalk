import { View, Text, Platform, TextInput, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import AuthLayout from '../../layout/AuthLayout'
import { MaterialIcons } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { useState } from 'react';
import {useForm} from '../../../hooks/useForm'
import { useAuthStore } from '../../../hooks/useAuthStore';
import { useNavigation } from '@react-navigation/native';
const initForm ={
  fullname:'',
  email:'',
  phone: '',
  password:''
}
const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/
  const formValidations = {
    fullname: [ (value) => value.length >= 4, 'The name must contain at least 4 or more characters.'],
    email: [ (value) => value.includes('@'), 'email invalid'],
    phone:[(value)=>value.length >=10,'phone number invalid'],
    password: [ (value) => passwordRegex.test(value), 'password must contain a special character, uppercase, number.'],
  }


const SignUpScreen = () => {
  const{startSingUp}=useAuthStore()
  const[formSub, setFormSub]= useState(false)
  const[secure,setSecure]= useState(true)
  const navigation = useNavigation();
  const{formState,onInputChange,fullname,email,phone,password,
    isFormValid,fullnameValid, passwordValid,emailValid,phoneValid}=useForm(initForm,formValidations)
  
  const toggle = ()=>{
    setSecure(!secure)
  }
  const handleSubmit = ()=>{
    setFormSub(true)
    if(!isFormValid) return;
    const newPhone = parseInt(phone);
    startSingUp({fullname:fullname, email:email,phone:newPhone,password:password})

  }

  return (
    <AuthLayout title='title2'>
        <View style={Platform.OS === 'android' ? {marginTop:20}: {marginTop:30}}>
        <View style={styles.inputContainer}>
                <TextInput
                placeholder='Ingrese su nombre'
                style={ fullnameValid && formSub ? {...styles.input,borderColor:'red'} : styles.input}
                value={fullname}
                onChangeText={(text)=>{onInputChange(text,'fullname')}}
                  />
                  {fullnameValid && formSub && <Text style={{fontSize:12,color:'red', fontWeight:'bold',width:320}}>{fullnameValid}</Text>}
         </View> 
      <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Enter your email'
                style={ emailValid && formSub ? {...styles.input,borderColor:'red'} : styles.input}
                value={email}
                onChangeText={(text)=>{onInputChange(text,'email')}} 
                  />
                <MaterialIcons name="mail-outline" size={24} color="black" style={{position:'absolute', top:16 , right: 10}} />
                {emailValid && formSub && <Text style={{fontSize:12,color:'red', fontWeight:'bold',width:320}}>{emailValid}</Text>}
         </View>
         <View style={styles.inputContainer}>
                <TextInput
                placeholder='Ingrese su celular'
                style={ phoneValid && formSub ? {...styles.input,borderColor:'red'} : styles.input}
                value={phone}
                onChangeText={(text)=>{onInputChange(text,'phone')}}
                  />
                   {phoneValid && formSub && <Text style={{fontSize:12,color:'red', fontWeight:'bold',width:320}}>{phoneValid}</Text>}
         </View> 
         <View style={styles.inputContainer}>
                <TextInput 
                placeholder='Ingrese su contraseña'
                style={ passwordValid && formSub ? {...styles.input,borderColor:'red'} : styles.input}
                secureTextEntry={secure}
                value={password}
                onChangeText={(text)=>{onInputChange(text,'password')}}
                  />
                <Entypo name="eye-with-line" size={24} color="black" style={{position:'absolute', top:16 , right: 10}} onPress={toggle} />
                {passwordValid && formSub && <Text style={{fontSize:12,color:'red', fontWeight:'bold',width:320}}>{passwordValid}</Text>}
         </View>
         <TouchableOpacity style={styles.button} onPress={handleSubmit} >
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