import { useDispatch } from 'react-redux';
import { signIn } from '../userActions';
import { UserCredentials } from '../types';

export const useSignIn = () => {
  const dispatch = useDispatch();

  return async (credentials: UserCredentials) => {
    await signIn(credentials, dispatch);
  };
};