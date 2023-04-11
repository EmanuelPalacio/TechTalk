import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '../../../assets/logo.png'
import Robot from '../../../assets/robotSaluda.png'

import { useNavigation } from '@react-navigation/native'
export const Intro = () => {
const{top}= useSafeAreaInsets()
const navigation = useNavigation()
console.log(process.env.LOCAL_HOST)
  return (
    <View style={{...styles.container,marginTop:top + 10}}  >
      <Image source={Logo} style={{width:160, height:185}} />
      <Text style={{color:'#5FBBE8', fontSize:25, fontWeight:'600', marginTop:20}}>Bienvenido a<Text style={{color:'#294F81', fontSize:25, fontWeight:'600'}}>TechTalk</Text></Text>
      <View style={styles.bubbleContainer}>
          <Text style={styles.bubbleText}>Con TechTalk puedes conectar con otros estudiantes de Tecnología para aprender Inglés.</Text>
      </View>
      <Image source={Robot} style={{width:130,height:160, marginTop:5, alignSelf:'flex-start', marginLeft:25}} />
      <View style={{marginTop:10}}>
        <TouchableOpacity 
        style={{...styles.button, backgroundColor:'#2D4C7E'}} 
        activeOpacity={0.8}
        onPress={()=>{navigation.navigate('SignIn')}}
        >
            <Text style={{color:'white', fontWeight:'bold'}}>Iniciar Sesión</Text>
        </TouchableOpacity>
        <TouchableOpacity
        activeOpacity={0.8} 
        style={{...styles.button, backgroundColor:'#FDFDFD', borderWidth:1, borderColor:'#2D4C7E'}}
        onPress={()=>{navigation.navigate('SignUp')}}
        >
            <Text  style={{color:'#2D4C7E', fontWeight:'bold'}}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
    },
    bubbleContainer:{
          width:210,
          height:100,
          borderRadius: 100,
          backgroundColor:'#BBDDF2',
          marginTop:20,
          alignSelf: 'flex-end',
          marginHorizontal:25,
          justifyContent:'center',
          alignItems:'center'

    },
    bubbleText:{
        fontSize:14,
        fontWeight:'300',
        maxWidth: 180,
    },
    button:{
        width:320,
        height:50,
        padding:10,
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center', 
        marginBottom:8
    }
    
    
})


