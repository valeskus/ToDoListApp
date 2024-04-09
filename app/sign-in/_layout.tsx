import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useSignInController } from './useSignInController';

export default function SignIn(): JSX.Element {
  const { handleEmail, handlePassword, handlePress, email, password } = useSignInController()
  return (
    <View style={styles.container}>
      <Text>Sign in screen</Text>
      <TextInput
        style={{ padding: 5, borderColor: 'red', borderWidth: 2, marginBottom: 10 }}
        onChangeText={handleEmail}
        value={email}
      />
      <TextInput
        style={{ padding: 5, borderColor: 'red', borderWidth: 2, marginBottom: 10 }}
        onChangeText={handlePassword}
        value={password}
      />
      <Button onPress={handlePress} title='Sign In' />
    </View>
  )
}
