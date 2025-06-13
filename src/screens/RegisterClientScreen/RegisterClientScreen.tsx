import React, { useState } from 'react';
import {
    Text,
    SafeAreaView,
    StatusBar,
} from 'react-native';

import styles from './RegisterClientScreen.styles';
import ImagePickerPlaceholder from '../../components/ImagePickerPlaceholder/ImagePickerPlaceholder';
import ClientInputField from '../../components/ClientInputField/ClientInputField';
import ClientSaveButton from '../../components/ClientSaveButton/ClientSaveButton';

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
            <ImagePickerPlaceholder />

            <ClientInputField
                placeholder="Nome completo"
                value={name}
                onChangeText={setName}
            />
            <ClientInputField
                placeholder="Telefone"
                keyboardType="phone-pad"
                value={phone}
                onChangeText={setPhone}
            />
            <ClientSaveButton
                onPress={handleSubmit}
                disabled={!name || !phone}
            />

        </SafeAreaView>
    );
}
