import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F4F4F4',
    },
    scrollContainer: {
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 140,
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
        marginTop: 10,
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
        marginBottom: 10,
        alignSelf: 'flex-start',
        marginLeft: 10,
    },
    idText: {
        fontSize: 20,
        color: '#545454',
        marginLeft: 5,
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
    mapWrapper: {
        width: '90%',
        height: 100,
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 16,
    },
    map: {
        width: '100%',
        height: '100%',
    },
    smallMap: {
        width: 120,
        height: 60,
        borderRadius: 10,
        marginLeft: 10,
    },
    loadingMap: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEE',
    },

    loadingText: {
        marginTop: 8,
        fontSize: 14,
        color: '#00492A',
        fontStyle: 'italic',
    },

});

export default styles;