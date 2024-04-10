import { Text, View } from 'react-native';
import { Button } from '../../../../../src/UI/Button';
import { styles } from './styles';

interface Props {
    onAdd: () => Promise<void>;
    // signOut:()=>{}
}

export function Header({ onAdd }: Props): JSX.Element {

    return (
        <View style={styles.container}>
            <Button title={'Sign Out'} onPress={() => { }} />
            <Text style={styles.title}>To Do List</Text>
            <Button title={'Add new'} onPress={onAdd} />
        </View>
    )
}
