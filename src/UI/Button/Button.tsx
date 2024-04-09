import { Pressable, Text } from "react-native";
import { styles } from './styles'

interface Props {
    title: string;
    onPress: () => void
}

export function Button({ title, onPress }: Props): JSX.Element {
    return (
        <Pressable style={({ pressed }) => [
            styles.button,
            pressed && { transform: [{ scale: 0.9 }] }]} onPress={onPress}>
            <Text style={styles.title}>{title}</Text>
        </Pressable>
    )
}