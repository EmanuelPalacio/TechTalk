import { TextInput, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import styles from './styleInput';
import theme from '../../../theme/theme';

export default function StyledFunction({
  icon,
  secondIcon,
  placeholder,
  password,
  name,
  value,
  onChange,
}) {
  const [focus, setFocus] = useState(false);
  const [viewPassword, setViewPassword] = useState(password);
  const handlePassword = () => {
    setViewPassword(!viewPassword);
  };
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.inputContainer,
          focus ? styles.inputContainerFocus : null,
        ]}
      >
        <View style={styles.icon}>{icon}</View>
        <TextInput
          autoCapitalize='none'
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor={theme.colorText.primaryText}
          secureTextEntry={viewPassword}
          onFocus={() => setFocus(!focus)}
          onBlur={() => setFocus(!focus)}
          value={value}
          onChangeText={(text) => onChange(text, name)}
        />
      </View>
      {secondIcon ? (
        <TouchableOpacity
          style={[styles.secondIcon, !viewPassword && styles.seconIconOpacitiy]}
          onPress={handlePassword}
        >
          {secondIcon}
        </TouchableOpacity>
      ) : null}
    </View>
  );
}
