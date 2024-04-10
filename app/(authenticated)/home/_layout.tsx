import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Link, Redirect } from 'expo-router';

import { styles } from './styles';
import { useHomeController } from './useHomeController';
import { Button } from '../../../src/UI/Button';

export default function Home(): JSX.Element {
  const { toDos, addItem, isLoading } = useHomeController();

  return (
    <View style={styles.container}>
      <Text> Home</Text>
      {toDos.map((item) => (
        <Text key={item.index}>
          {item.title}
        </Text>
      ))}
      <Button
        onPress={addItem}
        title="Add item"
      />
      {isLoading && <ActivityIndicator />}
    </View>
  )
}