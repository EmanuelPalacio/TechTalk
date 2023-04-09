import { StyleSheet, TextInput, View } from 'react-native';
import theme from '../themes/theme.js';
import { SvgUri } from 'react-native-svg';

export default function StyledInput({
  url,
  secondUrl,
  placeholder,
  value,
  keyboardType,
  onChangeText,
  secureTextEntry,
}) {
  return (
    <View style={styles.container}>
      <SvgUri
        width='50'
        uri={url}
        style={{
          marginLeft: 5,
          marginRight: 5,
        }}
      />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType === 'email' ? 'email-address' : undefined}
        autoCapitalize={keyboardType === 'email' ? 'none' : undefined}
        secureTextEntry={secureTextEntry ? true : false}
        style={styles.input}
      />
      <SvgUri
        width='50'
        uri={secondUrl}
        style={{
          marginLeft: 5,
          marginRight: 5,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: theme.colors.PrimaryText,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fontFamily.main,
    width: '70%',
    height: '100%',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.secondaryTransparency,
  },
});
