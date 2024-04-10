import { Stack } from "expo-router";
import { store } from "../src/stores/rootStore";
import { Provider } from 'react-redux';

export default () => {
    return (
        <Provider store={store}>
            <Stack screenOptions={{ headerShown: false }} />
        </Provider>
    );
}