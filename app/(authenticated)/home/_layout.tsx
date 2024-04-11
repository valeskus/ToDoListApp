import React from 'react';
import { ActivityIndicator, FlatListProps, ListRenderItem, Platform, TouchableOpacity, View } from 'react-native';
import DragList, { DragListRenderItemInfo } from 'react-native-draglist';

import { styles } from './styles';
import { useHomeController } from './useHomeController';
import { Button } from '../../../src/UI/Button';
import { Card } from '../../../src/UI/Card';
import { Header } from './components/header';
import { Input } from '../../../src/UI/Input';
import * as CardApi from '../../../src/api/card.api'

function renderItem(info: DragListRenderItemInfo<CardApi.Card>) {
  const { item, onDragStart, onDragEnd, isActive } = info;

  return (<Card
    title={item.title}
    description={item.description}
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
    key={item.id}
  />)
}

function keyExtractor(item: CardApi.Card) {
  return item.id;
}

export default function Home(): JSX.Element {
  const { toDos,
    addItem,
    isLoading,
    isFormHide,
    changeFormShowing,
    handleCardTitle,
    handleCardDescription,
    cardTitle,
    cardDescription,
    signOut,
    onReordered
  } = useHomeController();

  return (
    <View style={styles.screen_container}>
      <Header onFormButtonPress={changeFormShowing} isFormHide={isFormHide} signOut={signOut} />
      <View style={Platform.OS === 'web' ? styles.container : styles.container_mobile}>
        {!isFormHide &&
          <View style={Platform.OS === 'web' ? styles.form_container : styles.form_container_mobile}>
            <Input label='Title :' value={cardTitle} onChange={handleCardTitle} />
            <Input label='Descriptionss :' value={cardDescription} onChange={handleCardDescription} />
            <Button title={'Add new'} onPress={addItem} />
          </View>
        }
        <View style={styles.card_container_wrap}>
          <DragList
          style={styles.cardsContainer}
            data={toDos}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onReordered={onReordered}
            key={Platform.OS === 'web' ? toDos.join() : 'static_key'}
          />
        </View>
        {isLoading && <ActivityIndicator />}
      </View>
    </View>

  )
}