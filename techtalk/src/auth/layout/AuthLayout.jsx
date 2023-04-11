import { View, Text,TouchableOpacity,Platform,Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Logo from '../../../assets/logo.png'
import { useSelector } from 'react-redux';


const AuthLayout = ({children,title= 'title1'}) => {

    const{top}=useSafeAreaInsets()
    const{status, user}=useSelector(state=>state.auth)
  console.log(user)

  return (
    <ScrollView>
    <View style={{...styles.container,marginTop:top + 10}}>
      <Image source={Logo} style={{width:110, height:125}} />
      <View style={Platform.OS === 'android' ? {marginHorizontal:20, alignSelf:'flex-start', marginTop:10}: {marginHorizontal:20, alignSelf:'flex-start', marginTop:20}}>
        {
            title === 'title1' 
            ? <Text style={{color:'#202020', fontSize:22, fontWeight:'bold'}}>¡Bienvenido de vuelta!</Text>
            : <Text style={{color:'#5FBBE8', fontSize:25, fontWeight:'600', marginTop:10}}>Bienvenido a <Text style={{color:'#294F81', fontSize:25, fontWeight:'600'}}>TechTalk</Text></Text>
        }
        
        <Text style={{color:'#313131', fontSize:18, fontWeight:'400'}}>Ingresa tus datos para continuar</Text>
      </View>
      {children}
      <View style={{flexDirection:'row',marginTop:20, alignItems:'center', justifyContent:'space-evenly', width:320}}>
        <View style={{borderTopWidth:1, borderColor:'black', width:120}} />
        <View style={{borderWidth:1 , borderColor:'black', borderRadius:100, width:10, height:10}} />
        <View style={{borderTopWidth:1, borderColor:'black', width:120}} />
      </View>
      <View style={{marginTop:15}}>
      <TouchableOpacity style={styles.button1} >
           <Text style={{}}>Iniciar sesión con Google</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} >
           <Text style={{}}>Iniciar sesión con Github</Text>
          </TouchableOpacity>
      </View>
      </View>
      </ScrollView>
  )
}


const styles = StyleSheet.create({
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
      },
      container:{
        justifyContent:'center',
        alignItems:'center'
      }
})
export default AuthLayout