import React from 'react';
import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useSignUpController } from './useSignUpController';
import { LinkButton } from '../../src/UI/LinkButton';
import { Button } from '../../src/UI/Button';
import { Input } from '../../src/UI/Input';

export default function SignUp(): JSX.Element {
  const { handleEmail, handlePassword, handlePress, email, password } = useSignUpController();

  return (
    <View style={styles.container}>
      <View style={styles.first_container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.text}>To keep connected with us please sign in with your email and password</Text>
        <LinkButton href='/sign-in' title={'Sign In'} />
      </View>
      <View style={styles.second_container}>
        <Text style={styles.title}>New here?</Text>
        <Text style={styles.text}>Sign up and discover a great amount of new opportunities!</Text>
        <View style={styles.inputs_container}>
          <Input onChange={handleEmail} label='Email' value={email} />
          <Input onChange={handlePassword} label='Password' value={password} />
        </View>
        <Button onPress={handlePress} title='Sign Up' />
      </View>
    </View>
  )
}
