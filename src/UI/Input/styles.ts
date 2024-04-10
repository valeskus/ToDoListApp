import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        height: 35,
        borderColor: 'rgb(50, 20,2)',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#FCFFFE',
        shadowColor: 'rgb(0, 0, 0)',
        shadowOpacity: 0.05,
        shadowRadius: 2,
        shadowOffset: { width: 0, height: 0 },
        paddingHorizontal: 5,
        letterSpacing: 0.04,
        fontWeight: '400',
        color: '#303030',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 20,
    },
    label: {
        marginBottom: 10,
    },
    center: {
        textAlign: 'center',
    },
    invalid: {
        borderColor: 'red',
        borderWidth: 1,
    },
});