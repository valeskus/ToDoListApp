import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row'
    },
    container_mobile: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column'
    },
    cardsContainer: {
        width: 300,
        flexDirection: 'column',
        padding: 10,
    },
    form_container: {
        width: 300,
        backgroundColor: 'rgb(190 186 186)',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        flexDirection: 'column',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        zIndex: 10
    },
    form_container_mobile: {
        alignItems: 'center',
        backgroundColor: 'rgb(190 186 186)',
        justifyContent: 'flex-start',
        padding: 10,
        flexDirection: 'column',
    },
    card_container_wrap: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center'
    }
});