import { StyleSheet } from 'react-native';

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

export default styles;
