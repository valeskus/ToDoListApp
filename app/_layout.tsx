import { Stack } from "expo-router";
import { StyleSheet } from "react-native";
import { store } from "../src/stores/rootStore";
import { Provider } from 'react-redux';



export default () => {
    return (
        <Provider store={store}>
            <Stack initialRouteName={'sign-in'} screenOptions={{ headerShown: false }}>
                <Stack.Screen name="sign-up" />
                <Stack.Screen name="home" />
            </Stack>
        </Provider>
    );
}