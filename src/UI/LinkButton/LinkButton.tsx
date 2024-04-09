import { Link } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { styles } from './styles'

interface Props {
    href: string;
    title: string;
}

export function LinkButton({ href, title }: Props): JSX.Element {
    return (
        <Link style={styles.title} href={href} >{title}</Link>
    )
}