import React from 'react';
import { TouchableOpacity, Image, Text } from 'react-native';
import styles from './ImagePickerPlaceholder.styles';

interface Props {
    onPress?: () => void;
}

export default function ImagePickerPlaceholder({ onPress }: Props) {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Image source={require('../../assets/default-avatar.jpg')} style={styles.image} />
            <Text style={styles.text}>Adicionar Foto</Text>
        </TouchableOpacity>
    );
}


