import { Redirect, Stack } from "expo-router";


export default function Index() {
  return (
    <Redirect href="/sign-in" />
  );
}