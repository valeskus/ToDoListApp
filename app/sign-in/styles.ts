import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
    },
    first_container: {
        backgroundColor: 'rgb(196 243 241)',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
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
        marginBottom: 20
    },
    inputs_container: {
        width: 200
    },
    text: {
        fontSize: 15,
        marginBottom: 10,
        textAlign: 'center'
    },
});