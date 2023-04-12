import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
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
  action,
}) {
  return (
    <View style={styles.container}>
      <SvgUri width='50' uri={url} />
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType === 'email' ? 'email-address' : undefined}
        autoCapitalize={keyboardType === 'email' ? 'none' : undefined}
        secureTextEntry={secureTextEntry ? true : false}
        style={styles.input}
      />
      <TouchableOpacity
        style={styles.secondIcon}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        onPress={() => action()}
      >
        <SvgUri width='50' uri={secondUrl} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    color: theme.colors.primaryText,
    fontSize: theme.fontSizes.subheading,
    fontFamily: theme.fontFamily.main,
    paddingHorizontal: 5,
    width: '75%',
    height: '100%',
  },
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '90%',
    height: 50,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: theme.colors.secondaryTransparency,
  },
  secondIcon: {
    position: 'absolute',
    right: 0,
  },
});
