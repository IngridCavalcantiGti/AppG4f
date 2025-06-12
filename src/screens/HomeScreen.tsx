import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Text, StatusBar, Image, StyleSheet, TouchableOpacity, SafeAreaView, View } from 'react-native';
import { RootStackParamList } from '../../App';

export default function HomeScreen() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <>
            <StatusBar backgroundColor="#00492A" barStyle="light-content" />
            <SafeAreaView style={styles.container}>
                <Text style={styles.welcomeText}>Olá, Alice</Text>
                <View style={styles.idRow}>
                    <Image source={require('../assets/location.png')} style={styles.location} />
                    <Text style={styles.idText}>A5874125</Text>
                </View>
                <View style={styles.imageWrapper}>
                    <Image source={require('../assets/home.png')} style={styles.image} />
                </View>
                <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Register')}
                >
                    <View style={styles.cardContent}>
                        <Image source={require('../assets/add.png')} style={styles.icon} />
                        <Text style={styles.cardText}>Cadastros</Text>
                    </View>
                    <View style={styles.cardBottomLine} />
                </TouchableOpacity>

                <TouchableOpacity style={styles.card}>
                    <View style={styles.cardContent}>
                        <Image source={require('../assets/add.png')} style={styles.icon} />
                        <Text style={styles.cardText}>Consultar Organização</Text>
                    </View>
                    <View style={styles.cardBottomLine} />
                </TouchableOpacity>
                <View style={styles.bottomTab}>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../assets/phone.png')} style={styles.tabIcon} />

                        <Text style={styles.tabText}>ITEM 1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../assets/account.png')} style={styles.tabIcon} />
                        <Text style={[styles.tabText, styles.activeTab]}>ITEM 2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.tabItem}>
                        <Image source={require('../assets/favorite.png')} style={styles.tabIcon} />
                        <Text style={styles.tabText}>ITEM 3</Text>
                    </TouchableOpacity>
                </View>

            </SafeAreaView>
        </>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 70,
    },
    welcomeText: {
        fontWeight: '700',
        fontSize: 48,
        lineHeight: 48,
        letterSpacing: 0,
        color: 'rgba(0, 73, 42, 1)',
        alignSelf: 'flex-start',
        marginLeft: 10,
        marginTop: 30,
    },


    imageWrapper: {
        width: '100%',
        height: 143,
        borderRadius: 20,
        overflow: 'hidden',
        marginBottom: 30,
    },

    image: {
        width: '100%',
        height: 270,
        resizeMode: 'cover',
        marginTop: -100,
    },

    card: {
        backgroundColor: '#fff',
        width: 304,
        height: 125,
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 16,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },

    cardBottomLine: {
        height: 11,
        backgroundColor: '#F68B1F',
        width: '100%',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        position: 'absolute',
        bottom: 0,
    },

    icon: {
        width: 58,
        height: 46,
        marginBottom: 6,
        resizeMode: 'contain',
    },
    cardContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardText: {
        color: '#545454',
        fontSize: 20,
        fontWeight: '500',
    },

    idRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 40,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },

    idText: {
        fontSize: 20,
        color: '#545454',
    },

    location: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
    },

    bottomTab: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        backgroundColor: '#fff',
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },

    tabItem: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    tabIcon: {
        width: 24,
        height: 24,
        marginBottom: 4,
        resizeMode: 'contain',
    },

    tabText: {
        fontSize: 12,
        color: '#333',
    },

    activeTab: {
        color: 'rgba(0, 73, 42, 1)',
        fontWeight: 'bold',
    },


});
