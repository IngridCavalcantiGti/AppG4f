
import React from 'react';
import { View, Text } from 'react-native';
import styles from './OrganizationCard.styles';

interface Props {
  name: string;
  city: string;
  state: string;
}

export default function OrganizationCard({ name, city, state }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{name}</Text>
      <Text style={styles.cardSubtitle}>{city}, {state}</Text>
    </View>
  );
}

