import { Dispatch } from 'redux';
import * as UserApi from '../../api/user.api';
import { UserStore } from './userReducer';
import { UserCredentials, UserInfo } from './types';

export enum UserActions {
    SET_USER = '@user/set',
    SIGN_OUT = '@user/sign-out',
    ERROR = '@error/user',
}

const actionSetUser = (userInfo: UserInfo) => ({
    type: UserActions.SET_USER,
    payload: userInfo,
});

const actionSignOut = () => ({
    type: UserActions.SIGN_OUT,
});

const actionError = (error: unknown) => ({
    type: UserActions.ERROR,
    payload: error,
});

export const signIn = async (credentials: UserCredentials, dispatch: Dispatch) => {
    try {
        const data = await UserApi.login(credentials.email, credentials.password);

        dispatch(actionSetUser({
            email: data.user.email,
            accessToken: await data.user.getIdToken(),
            id: data.user.uid
        }));
    } catch (error) {
        dispatch(actionError(error));
    }
};

export const signUp = async (credentials: UserCredentials, dispatch: Dispatch) => {
    try {
        const data = await UserApi.register(credentials.email, credentials.password);

        dispatch(actionSetUser({
            email: data.user.email,
            accessToken: await data.user.getIdToken(),
            id: data.user.uid
        }));
    } catch (error) {
        dispatch(actionError(error));
    }
};

export const signOut = async (dispatch: Dispatch) => {
    try {
        dispatch(actionSignOut());
    } catch (error) {
        dispatch(actionError(error));
    }
};