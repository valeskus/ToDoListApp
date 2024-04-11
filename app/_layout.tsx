import { Redirect, Stack } from "expo-router";
import { store } from "../src/stores/rootStore";
import { Provider } from 'react-redux';

import { useGetUser, useUserStore } from "../src/stores/user/hooks";
import { useEffect } from "react";
import { ActivityIndicator } from "react-native";

const RedirectHandler = (): JSX.Element => {
    const { id, isInitialized } = useUserStore();
    const getUser = useGetUser();

    useEffect(() => {
        if (!isInitialized) {
            getUser()
        }
    }, [])

    if (!isInitialized) {
        return <ActivityIndicator size="large" />
    }

    if (id) {
        return (
            <>
                <Redirect href="/home" />
                <Stack screenOptions={{ headerShown: false }} />
            </>
        );
    }

    return (
        <Stack screenOptions={{ headerShown: false }} />
    )
}

export default () => {
    return (
        <Provider store={store}>
            <RedirectHandler />
        </Provider>
    );
}