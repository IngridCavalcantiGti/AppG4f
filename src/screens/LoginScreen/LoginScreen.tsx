import React from 'react';
import {
    View,
    Text,
    StatusBar,
    SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../../../App';
import styles from './LoginScreen.styles';
import PrimaryButton from '../../components/PrimaryButton/PrimaryButton';
import InputField from '../../components/InputField/InputField';

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
                        <InputField placeholder="Login" />
                        <InputField placeholder="Senha" secureTextEntry />
                        <Text style={styles.link}>Redefinir senha</Text>
                        <PrimaryButton label="ENTRAR" onPress={() => navigation.navigate('Home')} />
                    </View>
                </SafeAreaView>
            </View>
        </>
    );
}

