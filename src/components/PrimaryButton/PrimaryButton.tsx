import React from 'react';
import { TouchableOpacity, Text, ViewStyle } from 'react-native';

import styles from './PrimaryButton.styles';

interface Props {
    label: string;
    onPress: () => void;
    style?: ViewStyle;
}

export default function PrimaryButton({ label, onPress, style }: Props) {
    return (
        <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
            <Text style={styles.buttonText}>{label}</Text>
        </TouchableOpacity>
    );
}
