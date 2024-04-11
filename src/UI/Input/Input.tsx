import React from 'react';
import {
    Image,
    KeyboardTypeOptions,
    Pressable,
    Text,
    TextInput,
    View,
} from 'react-native';
import { styles } from './styles';

export type Props = {
    type?: KeyboardTypeOptions;
    label?: string;
    length?: number;
    invalid?: boolean;
    value?: string;
    refValue?: any;
    show?: boolean;
    changeData?: () => void;
    isSelectTextOnFocus?: boolean;
    onChange?: (value: string) => void;
};


export function Input({
    label,
    length,
    invalid,
    value,
    onChange,
    refValue,
    isSelectTextOnFocus,
    show,
    changeData
}: Props): JSX.Element {
    const isCodeInput = length === 1 ? true : false;
    return (
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                secureTextEntry={changeData ? !show : false}
                style={[
                    styles.input,
                    isCodeInput && styles.center,
                    invalid && styles.invalid,
                    changeData && styles.iconInput
                ]}
                maxLength={length}
                onChangeText={onChange}
                value={value}
                ref={refValue}
                selectTextOnFocus={isSelectTextOnFocus}
            />
            {changeData &&
                <Pressable style={styles.icon_container} onPress={changeData}>
                    {!show && <Image style={styles.icon} source={require('../../../assets/eyeOpen.png')} />}
                    {show && <Image style={styles.icon} source={require('../../../assets/eye.png')} />}
                </Pressable>
            }
        </View>
    );
}