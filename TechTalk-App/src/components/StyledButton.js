import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet } from 'react-native';
import theme from '../themes/theme.js';

export default function StyledButton({ type, text, navigate }) {
  const navigation = useNavigation();

  const textStyles = [
    styles.text,

    type === 'secondary' && {
      color: theme.colors.PrimaryText,
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
    <TouchableOpacity onPress={() => navigation.navigate(navigate)}>
      <View style={styleButton}>
        <Text style={textStyles}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    color: theme.colors.secondText,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fontFamily.main,
    fontWeight: theme.fontWeights.bold,
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
