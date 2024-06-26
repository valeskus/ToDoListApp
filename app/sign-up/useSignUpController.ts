import { useCallback, useState } from 'react';
import { useSignUp } from '../../src/stores/user/hooks/useSignUp';

export const useSignUpController = () => {
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [showPassword, setShowPassword] = useState<boolean>(false);


    const signUp = useSignUp()

    const handleEmail = useCallback((value: string) => {
        setEmail(value)
    }, [])

    const handlePassword = useCallback((value: string) => {
        setPassword(value)
    }, [])

    const handlePress = useCallback(() => {
        if (!email || !password) {
            return
        }
        signUp({ email, password })
    }, [email, password])

    const changeInputData = useCallback(() => {
        setShowPassword(!showPassword)
    }, [showPassword])

    return {
        handleEmail,
        handlePassword,
        handlePress,
        email,
        password,
        message,
        showPassword,
        changeInputData
    }
}