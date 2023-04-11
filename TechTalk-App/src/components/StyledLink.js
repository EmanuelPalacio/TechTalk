import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../themes/theme.js';

export default function StyledLink({ text, action }) {
  return (
    <TouchableOpacity onPress={() => action()}>
      <View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    color: theme.colors.thirdText,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fontFamily.main,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 50,
    borderRadius: 25,
    minWidth: 200,
  },
});
