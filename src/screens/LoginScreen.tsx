import React from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../App';

export default function LoginScreen() {

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    return (
        <>
            <StatusBar
                backgroundColor="rgba(0, 73, 42, 1)"
                barStyle="light-content"
                translucent={false}
            />

            <View style={styles.gradient}>
                <SafeAreaView style={styles.container}>
                    <View style={styles.card}>
                        <Text style={styles.title}>Seja bem vindo!</Text>

                        <TextInput
                            placeholder="Login"
                            placeholderTextColor="#0D7856"
                            style={styles.input}
                        />

                        <TextInput
                            placeholder="Senha"
                            placeholderTextColor="#0D7856"
                            secureTextEntry
                            style={styles.input}
                        />

                        <Text style={styles.link}>Redefinir senha</Text>

                        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
                            <Text style={styles.buttonText}>ENTRAR</Text>
                        </TouchableOpacity>

                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 14,
        width: '85%',
        alignItems: 'center',

        shadowColor: '#000',
        shadowOffset: { width: 0, height: 15 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        elevation: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'rgba(0, 73, 42, 1)',
        marginBottom: 24,
    },
    input: {
        borderWidth: 1,
        borderColor: 'rgba(13, 120, 86, 1)',
        borderRadius: 6,
        width: 268,
        paddingVertical: 14,
        paddingHorizontal: 12,
        marginBottom: 12,
        color: '#0D7856',
    },
    link: {
        fontSize: 12,
        color: '#444',
        marginBottom: 10,
        marginTop: 15,
    },
    button: {
        backgroundColor: 'rgba(246, 139, 31, 1)',
        paddingVertical: 14,
        paddingHorizontal: 32,
        borderRadius: 8,
        width: 215,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    gradient: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

