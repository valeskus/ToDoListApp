import React from 'react';
import { ActivityIndicator, Platform, ScrollView, Text, View } from 'react-native';

import { styles } from './styles';
import { useHomeController } from './useHomeController';
import { Button } from '../../../src/UI/Button';
import { Card } from '../../../src/UI/Card';
import { Header } from './components/header';
import { Input } from '../../../src/UI/Input';

export default function Home(): JSX.Element {
  const { toDos,
    addItem,
    isLoading,
    isFormHide,
    changeFormShowing,
    handleCardTitle,
    handleCardDescription,
    cardTitle,
    cardDescription
  } = useHomeController();

  return (
    <View style={{ flexDirection: 'column', flex: 1 }}>
      <Header onFormButtonPress={changeFormShowing} isFormHide={isFormHide} />
      <View style={Platform.OS === 'web' ? styles.container : styles.container_mobile}>
        {!isFormHide &&
          <View style={Platform.OS === 'web' ? styles.form_container : styles.form_container_mobile}>
            <Input label='Title :' value={cardTitle} onChange={handleCardTitle} />
            <Input label='Descriptionss :' value={cardDescription} onChange={handleCardDescription} />
            <Button title={'Add new'} onPress={addItem} />
          </View>
        }
        <View style={styles.card_container_wrap}>
          <ScrollView style={styles.cardsContainer}>
            {toDos.map((item) => (
              <Card title={item.title} description={item.description} id={item.id} key={item.index} />
            ))}
          </ScrollView>
        </View>
        {isLoading && <ActivityIndicator />}
      </View>
    </View>

  )
}