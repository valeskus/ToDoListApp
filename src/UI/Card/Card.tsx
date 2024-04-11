import React from 'react';
import { Text, TouchableOpacity, View, Pressable, Platform } from "react-native";
import { styles } from './styles'

interface Props {
    title: string;
    description: string;
    onDragStart: () => void;
    onDragEnd: () => void;
}

function PressableElement(props: React.PropsWithChildren<Pick<Props, 'onDragEnd' | 'onDragStart'>>): JSX.Element {
    if (Platform.OS === 'web') {
        return (
            <div style={styles.container} onMouseUp={props.onDragEnd} onMouseDown={props.onDragStart}>
                {props.children}
            </div>
        )
    }

    return (
        <Pressable style={styles.container} onPressIn={props.onDragStart} onPressOut={props.onDragEnd}>
            {props.children}
        </Pressable>
    );
}

export function Card({ title, description, onDragStart, onDragEnd }: Props): JSX.Element {
    return (
        <PressableElement onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Text disabled selectable={false} style={styles.title}>{title}</Text>
            <Text disabled selectable={false} style={styles.description}>{description}</Text>
        </PressableElement>
    )
}