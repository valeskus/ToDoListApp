import React from 'react';
import { ActivityIndicator, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { useHomeController } from './useHomeController';
import { Button } from '../../../src/UI/Button';
import { Card } from '../../../src/UI/Card';
import { Header } from './components/header';

export default function Home(): JSX.Element {
  const { toDos, addItem, isLoading } = useHomeController();

  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <Header onAdd={addItem} />
      <View style={styles.container}>
        <ScrollView style={styles.cardsContainer}>
          {toDos.map((item) => (
            <Card title={item.title} description={item.description} id={item.id} key={item.index} />
          ))}
        </ScrollView>
        {isLoading && <ActivityIndicator />}
      </View>
    </View>

  )
}