import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import Logo from '../../../assets/images/developer.png';

const Home = () => {
  return (
    <View style={styles.root}>
        <Image
          source={Logo}
          style={styles.logo}
          resizeMode="contain"
        />
      <Text style={{ fontSize: 30, alignSelf: 'center'}}>Welcome to TechTalk</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      padding: 20,
    },
    logo: {
      width: '70%',
      maxWidth: 300,
      maxHeight: 200,
    },
  });

export default Home