import * as Redux from 'redux';
import { UserActions } from './userActions';
import { UserInfo } from './types';

export interface UserStore extends Partial<UserInfo> {
    isInitialized: boolean;
}

const initialState: UserStore = {
    isInitialized: false
};

export function userReducer(
    state = initialState,
    action: Redux.AnyAction,
): UserStore {
    switch (action.type) {
        case UserActions.SET_USER: {
            const { email, accessToken, id } = action.payload as Partial<UserInfo>;

            return {
                ...state,
                id,
                email,
                accessToken
            };
        }

        case UserActions.SET_INITIALIZED: {
            const { isInitialized } = action.payload as { isInitialized: boolean };

            return {
                ...state,
                isInitialized,
            }
        }

        case UserActions.SIGN_OUT: {
            return {
                ...state,
                id: undefined,
                email: undefined,
                accessToken: undefined
            }
        }
        default:
            return state;
    }
}