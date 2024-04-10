import { Redirect, Stack } from 'expo-router';
import { useUserStore } from '../../src/stores/user/hooks';


export default function AppLayout() {
  const { id } = useUserStore();

  if (!id) {
    return <Redirect href="/sign-in" />;
  }

  return <Stack />;
}