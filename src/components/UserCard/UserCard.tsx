import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './UserCard.styles';

interface Props {
    name: string;
    phone: string;
    avatarUrl: string;
}

export default function UserCard({ name, phone, avatarUrl }: Props) {
    return (
        <View style={styles.userCard}>
            <Image source={{ uri: avatarUrl }} style={styles.avatar} />
            <View style={styles.userInfo}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.phone}>{phone}</Text>
            </View>
        </View>
    );
}


