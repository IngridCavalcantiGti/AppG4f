import React, { useState } from 'react';
import {
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import styles from './RegisterClientScreen.styles';

export default function RegisterClientScreen() {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = () => {
        console.log({ name, phone });
    };

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor="#00492A" barStyle="light-content" />
            <Text style={styles.title}>Cadastrar Cliente</Text>

            <TouchableOpacity style={styles.imagePicker}>
                <Image
                    source={require('../../assets/default-avatar.jpg')}
                    style={styles.image}
                />
                <Text style={styles.imageText}>Adicionar Foto</Text>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                placeholder="Nome completo"
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />

            <TouchableOpacity
                testID="save-button"
                style={[styles.button, (!name || !phone) && styles.buttonDisabled]}
                onPress={handleSubmit}
                disabled={!name || !phone}
            >
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
}
