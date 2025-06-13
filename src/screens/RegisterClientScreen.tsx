import React, { useState } from 'react';
import {
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    Image,
    SafeAreaView,
    StatusBar,
} from 'react-native';

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
                    source={require('../assets/default-avatar.jpg')}
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


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#00492A',
        marginBottom: 20,
    },
    imagePicker: {
        alignItems: 'center',
        marginBottom: 30,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    imageText: {
        marginTop: 8,
        color: '#666',
        fontSize: 14,
    },
    input: {
        backgroundColor: '#fff',
        height: 50,
        borderRadius: 8,
        paddingHorizontal: 15,
        fontSize: 16,
        marginBottom: 15,
        elevation: 1,
    },
    button: {
        backgroundColor: '#00492A',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 10,
    },
    buttonDisabled: {
        backgroundColor: '#999',
    },
    buttonText: {
        color: '#FFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});
