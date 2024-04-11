import { useCallback, useEffect, useState } from "react"
import { useSignIn, useUserStore } from "../../src/stores/user/hooks"

export const useSignInController = () => {
    const [email, setEmail] = useState<string>('valeskus13@gmail.com');
    const [password, setPassword] = useState<string>('123456789');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const signIn = useSignIn();
    const userInfo = useUserStore();

    const handleEmail = useCallback((value: string) => {
        setEmail(value);
    }, [])

    const handlePassword = useCallback((value: string) => {
        setPassword(value);

    }, [])

    const handlePress = useCallback(() => {
        if (!email || !password) {
            return
        }
        signIn({ email, password })
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
        userInfo,
        showPassword,
        changeInputData
    }
}