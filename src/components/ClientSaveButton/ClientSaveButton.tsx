import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './ClientSaveButton.styles';

interface Props {
  onPress: () => void;
  disabled: boolean;
}

export default function ClientSaveButton({ onPress, disabled }: Props) {
  return (
    <TouchableOpacity
      testID="save-button"
      style={[styles.button, disabled && styles.buttonDisabled]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>Salvar</Text>
    </TouchableOpacity>
  );
}

