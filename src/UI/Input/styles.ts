import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    input: {
        height: 35,
        borderColor: 'rgb(50, 20,2)',
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#FCFFFE',
        paddingHorizontal: 5,
        letterSpacing: 0.04,
        fontWeight: '400',
        color: '#303030',
        position: 'relative',
    },
    iconInput: {
        paddingRight: 30
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
    icon: {
        height: 20,
        width: 20,
    },
    icon_container: {
        position: 'absolute',
        right: 10,
        top: 34,
    }
});