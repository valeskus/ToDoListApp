import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import { styles } from './styles';

export default function SignIn(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Sign in screen</Text>
      <StatusBar style="auto" />
    </View>
  )
}
