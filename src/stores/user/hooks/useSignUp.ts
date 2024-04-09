import { useDispatch } from 'react-redux';
import { signUp } from '../userActions';
import { UserCredentials } from '../types';

export const useSignUp = () => {
    const dispatch = useDispatch();

    return async (credentials: UserCredentials) => {
        await signUp(credentials, dispatch);
    };
};