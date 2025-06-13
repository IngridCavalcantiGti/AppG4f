import styles from './CardButton.styles';
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';

interface Props {
  text: string;
  onPress: () => void;
  icon: any;
}

export default function CardButton({ text, onPress, icon }: Props) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.cardContent}>
        <Image source={icon} style={styles.icon} />
        <Text style={styles.cardText}>{text}</Text>
      </View>
      <View style={styles.cardBottomLine} />
    </TouchableOpacity>
  );
}


