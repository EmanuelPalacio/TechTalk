import React from 'react';
import { Text, StyleSheet } from 'react-native';
import theme from '../themes/theme.js';

export default function StyledText({
  children,
  color,
  fontSize,
  fontWeight,
  style,
}) {
  const textStyles = [
    styles.text,
    color === 'secondary' && styles.colorSecondary,
    color === 'third' && styles.colorThird,
    color === 'fourth' && styles.colorFourth,
    fontSize === 'subheading' && styles.subHeading,
    fontSize === 'title' && styles.title,
    fontWeight === 'bold' && styles.bold,
  ];

  return <Text style={textStyles}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {
    color: theme.colors.primaryText,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fontFamily.main,
    fontWeight: theme.fontWeights.normal,
  },

  bold: {
    fontWeight: theme.fontWeights.bold,
  },
  subHeading: {
    fontSize: theme.fontSizes.subheading,
  },
  title: {
    fontSize: theme.fontSizes.header,
  },
  colorSecondary: {
    color: theme.colors.secondText,
  },
  colorThird: {
    color: theme.colors.thirdText,
  },
  colorFourth: {
    color: theme.colors.fourthText,
  },
});
