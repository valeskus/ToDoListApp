import React from 'react';
import { Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link } from 'expo-router';

import { styles } from './styles';


export default function Home(): JSX.Element {
  return (
    <View style={styles.container}>
      <Text> Home</Text>
    </View>
  )
}