import { Pressable, Text, View } from "react-native";
import { styles } from './styles'

interface Props {
    title: string;
    description: string;
}

export function Card({ title, description }: Props): JSX.Element {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}