import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import theme from '../themes/theme.js';

export default function StyledButton({ type, text, action }) {
  const textStyles = [
    styles.text,

    type === 'secondary' && {
      color: theme.colors.primaryText,
    },
  ];

  const styleButton = [
    styles.button,
    {
      backgroundColor:
        type === 'primary' ? theme.colors.secondary : theme.colors.primary,
    },
    type === 'secondary' && {
      borderColor: theme.colors.secondary,
      borderWidth: 2,
    },
  ];

  return (
    <TouchableOpacity onPress={() => action()}>
      <View style={styleButton}>
        <Text style={textStyles}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    color: theme.colors.secondText,
    fontSize: theme.fontSizes.subheading,
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
