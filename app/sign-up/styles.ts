import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    first_container: {
        flex: 1,
        backgroundColor: 'rgb(230 196 243)',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    second_container: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingHorizontal: 10,
        marginTop: 30
    },
    title: {
        fontSize: 35,
        marginBottom: 20,
    },
    text: {
        fontSize: 15,
        marginBottom: 20,
        textAlign: 'center'
    },
    inputs_container: {
        width: 200
    },
});