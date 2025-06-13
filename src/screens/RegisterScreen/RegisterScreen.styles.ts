import { StyleSheet } from 'react-native';

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

    highlightBox: {
        backgroundColor: '#fff',
        marginHorizontal: 16,
        padding: 8,
        borderColor: '#e0e0e0',
    },

    userInfo: {
        flex: 1,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
        paddingBottom: 12,
    },
    userLine: {
        marginTop: 4,
        borderBottomWidth: 1,
        borderBottomColor: '#e0e0e0',
    },

});

export default styles;