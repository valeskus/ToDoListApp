import React from 'react';
import { ScrollView, Text, TextInput, View } from 'react-native';
import { styles } from './styles';
import { useSignInController } from './useSignInController';
import { Button } from '../../src/UI/Button';

import { LinkButton } from '../../src/UI/LinkButton';
import { Input } from '../../src/UI/Input';
import { Redirect } from 'expo-router';

export default function SignIn(): JSX.Element {
  const { handleEmail, handlePassword, handlePress, email, password, userInfo } = useSignInController()
  return (
    <View style={styles.container}>
      <View style={styles.first_container}>
        <Text style={styles.title}>New here?</Text>
        <Text style={styles.text}>Sign up and discover a great amount of new opportunities!</Text>
        <LinkButton href='/sign-up' title={'Sign up'} />
      </View>
      <View style={styles.second_container}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.text}>To keep connected with us please sign in with your email and password</Text>
        <View style={styles.inputs_container}>
          <Input onChange={handleEmail} label='Email' value={email} />
          <Input onChange={handlePassword} label='Password' value={password} />
        </View>
        <Button onPress={handlePress} title='Sign In' />
        {userInfo.accessToken && <Redirect href={'/home'} />}
      </View>
    </View>
  )
}
