import * as Redux from 'redux';
import { UserActions } from './userActions';
import { UserInfo } from './types';

export interface UserStore extends Partial<UserInfo> { }

const initialState: UserStore = {};

export function userReducer(
    state = initialState,
    action: Redux.AnyAction,
): UserStore {
    switch (action.type) {
        case UserActions.SET_USER: {
            const { email, accessToken, id } = action.payload as UserInfo;

            return {
                id,
                email,
                accessToken
            };
        }

        case UserActions.SIGN_OUT: {
            return initialState;
        }
        default:
            return state;
    }
}