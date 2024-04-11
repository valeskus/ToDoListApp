import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    screen_container: {
        flexDirection: 'column',
        flex: 1
    },
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
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        paddingTop: 3,
    },

    list_web: {
        maxHeight: 550,
        paddingTop: 50,
        paddingBottom: 50,
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
        position: 'relative',
    },
    loader: {
        position: 'absolute',
        top: '40%',
        right: '50%',
        left: '50%'
    }
});