import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useSignUpController } from './useSignUpController';

export default function SignUp(): JSX.Element {
  const { handleEmail, handlePassword, handlePress, email, password, message } = useSignUpController();

  return (
    <View style={styles.container}>
      <Text>Sign up screen</Text>
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
      <Button onPress={handlePress} title='Sign Up' />
      <Text>{message}</Text>
    </View>
  )
}
