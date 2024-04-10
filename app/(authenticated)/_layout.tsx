import { Redirect, Stack } from 'expo-router';
import { useUserStore } from '../../src/stores/user/hooks';
import { Header } from './home/components/header';


export default function AppLayout() {
  const { id } = useUserStore();

  if (!id) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack screenOptions={{ headerShown: false }} />
}
