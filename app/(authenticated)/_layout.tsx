import { Redirect, Stack } from 'expo-router';
import { useGetUser, useUserStore } from '../../src/stores/user/hooks';
import { ActivityIndicator } from 'react-native';
import { useEffect } from 'react';

export default function AppLayout() {
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

  if (!id) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
