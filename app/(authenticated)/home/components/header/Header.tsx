import { Text, View } from 'react-native';
import { Button } from '../../../../../src/UI/Button';
import { styles } from './styles';

interface Props {
    onFormButtonPress: () => void;
    isFormHide: boolean
    // signOut:()=>{}
}

export function Header({ isFormHide, onFormButtonPress }: Props): JSX.Element {

    return (
        <View style={styles.container}>
            <View style={styles.header_item}>
                <Button title={'Sign Out'} onPress={() => { }} />
            </View>
            <View style={styles.header_item}>
                <Text style={styles.title}>To Do List</Text>

            </View>
            <View style={styles.header_item}>
                {isFormHide && <Button title={'Add New'} onPress={onFormButtonPress} />}
                {!isFormHide && <Button title={'Hide Form'} onPress={onFormButtonPress} />}
            </View>

        </View>
    )
}
