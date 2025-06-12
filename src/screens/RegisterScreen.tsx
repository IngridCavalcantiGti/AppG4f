import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    TextInput,
    TouchableOpacity,
    StatusBar,
} from 'react-native';
import { RootStackParamList } from '../../App';

type User = {
    picture: {
        thumbnail: string;
    };
    name: {
        first: string;
        last: string;
    };
    phone: string;
};


export default function RegisterScreen() {
    const [users, setUsers] = useState<User[]>([]);
    const [searchText, setSearchText] = useState('');

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        fetch('https://randomuser.me/api/?results=6&nat=br')
            .then(res => res.json())
            .then(data => setUsers(data.results))
            .catch(err => console.error(err));
    }, []);

    return (
        <>
            <StatusBar backgroundColor="#00492A" barStyle="light-content" />

            <View style={styles.customHeader}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                    <Image source={require('../assets/arrow-left.png')} style={styles.backIcon} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Cadastros</Text>
            </View>

            <View style={styles.searchBox}>
                <Image source={require('../assets/search.png')} style={styles.search} />
                <TextInput
                    placeholder="Procurar"
                    style={styles.input}
                    value={searchText}
                    onChangeText={setSearchText}
                />

            </View>


            <FlatList
                data={users.filter(user =>
                    `${user.name.first} ${user.name.last}`.toLowerCase().includes(searchText.toLowerCase())
                )}

                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.list}
                renderItem={({ item }: { item: User }) => (
                    <View style={styles.userCard}>
                        <Image source={{ uri: item.picture.thumbnail }} style={styles.avatar} />
                        <View>
                            <Text style={styles.name}>
                                {item.name.first} {item.name.last}
                            </Text>
                            <Text style={styles.phone}>{item.phone}</Text>
                        </View>
                    </View>
                )}
            />


            <TouchableOpacity style={styles.fab}>
                <Text style={styles.fabText}>+</Text>
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
        </>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#00492A',
        paddingVertical: 14,
        paddingHorizontal: 16,
    },
    headerText: {
        color: '#fff',
        fontSize: 20,
    },
    searchBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 40,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginBottom: 16,
        marginTop: 16,
        alignSelf: 'center',
        width: '90%',
    },

    search: {
        width: 16,
        height: 16,
        marginRight: 8,
        resizeMode: 'contain',
    },
    input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
        padding: 0,
    },
    list: {
        paddingHorizontal: 16,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        borderBottomWidth: 0.6,
        borderBottomColor: '#ccc',
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
        marginRight: 16,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    phone: {
        color: '#666',
    },
    fab: {
        backgroundColor: 'orange',
        width: 56,
        height: 56,
        borderRadius: 28,
        position: 'absolute',
        right: 20,
        bottom: 90,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5,
    },
    fabText: {
        fontSize: 28,
        color: '#fff',
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

    customHeader: {
        height: 80,
        backgroundColor: '#014630',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    backIcon: {
        width: 24,
        height: 24,
        tintColor: '#fff',
        marginRight: 10,
    },
    headerTitle: {
        fontSize: 24,
        color: '#fff',
    },

});
