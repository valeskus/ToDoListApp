import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/userReducer';

const rootReducer = combineReducers({
    user: userReducer,
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });