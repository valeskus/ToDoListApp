import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';
import { Provider } from 'react-redux';


import { styles } from './styles';
import { store } from '../../src/stores/rootStore';

export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Link href="/sign-up">sign up</Link>
      <Link href="/sign-in">sign in</Link>
      <StatusBar style="auto" />
    </View>
  )
}