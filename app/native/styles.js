import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#009688',
    },
    title: {
        fontSize: 32,
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: 'bold',
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#80CBC4', 
        width: 100,
        padding: 10,
        margin: 5,
    },
    buttonText: {
        color: '#FFFFFF'
    },
});

export default styles;