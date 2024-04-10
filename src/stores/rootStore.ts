import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { userReducer } from './user/userReducer';
import { toDoListReducer } from './toDoList/toDoListReducer';

const rootReducer = combineReducers({
    user: userReducer,
    toDoList: toDoListReducer
});

export type RootStore = ReturnType<typeof rootReducer>;

export const store = configureStore({ reducer: rootReducer });