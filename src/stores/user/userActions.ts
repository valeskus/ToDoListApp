import { Dispatch } from 'redux';
import * as UserApi from '../../api/user.api';
import { UserStore } from './userReducer';
import { UserCredentials, UserInfo } from './types';
import { client } from '../../api/client';

export enum UserActions {
    SET_USER = '@user/set',
    SET_INITIALIZED = '@user/set-initialized',
    SIGN_OUT = '@user/sign-out',
    ERROR = '@error/user',
}

const actionSetUser = (userInfo: Partial<UserInfo>) => ({
    type: UserActions.SET_USER,
    payload: userInfo,
});

const actionSetInitialized = (isInitialized: boolean) => ({
    type: UserActions.SET_INITIALIZED,
    payload: { isInitialized },
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
        dispatch(actionSetInitialized(false));

        const data = await UserApi.login(credentials.email, credentials.password);

        dispatch(actionSetUser({
            email: data.user.email,
            accessToken: await data.user.getIdToken(),
            id: data.user.uid
        }));
    } catch (error) {
        dispatch(actionError(error));
    } finally {
        dispatch(actionSetInitialized(true));
    }
};

export const signUp = async (credentials: UserCredentials, dispatch: Dispatch) => {
    try {
        dispatch(actionSetInitialized(false))

        const data = await UserApi.register(credentials.email, credentials.password);

        dispatch(actionSetUser({
            email: data.user.email,
            accessToken: await data.user.getIdToken(),
            id: data.user.uid
        }));
    } catch (error) {
        dispatch(actionError(error));
    } finally {
        dispatch(actionSetInitialized(true));
    }
};

export const signOut = async (dispatch: Dispatch) => {
    try {
        await client.signOut();

        dispatch(actionSignOut());
    } catch (error) {
        dispatch(actionError(error));
    }
};

export const getUser = async (dispatch: Dispatch) => {
    try {
        dispatch(actionSetInitialized(false));


        const user = await client.getUser();

        if (user) {
            dispatch(actionSetUser({
                email: user.email,
                accessToken: await user.getIdToken(),
                id: user.uid
            }));
        } else {
            dispatch(actionSetUser({}));
        }
    } catch (error) {
        dispatch(actionError(error));
    } finally {
        dispatch(actionSetInitialized(true));
    }
};