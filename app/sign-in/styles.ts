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
        height: 180
    },
    second_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        minHeight: 350
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
        marginBottom: 20,
        textAlign: 'center'
    },
});