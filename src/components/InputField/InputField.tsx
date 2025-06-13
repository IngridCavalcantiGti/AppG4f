import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import styles from './InputField.styles';


export default function InputField(props: TextInputProps) {
  return (
    <TextInput
      placeholderTextColor="#0D7856"
      style={styles.input}
      {...props}
    />
  );
}


