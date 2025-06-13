import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './ClientInputField.styles';

export default function ClientInputField(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#999"
      style={[styles.input, props.style]}
      {...props}
    />
  );
}

