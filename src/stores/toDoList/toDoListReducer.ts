import * as Redux from 'redux';
import { ToDoListActions } from './toDoListActions';
import * as CardApi from '../../api/card.api';

export interface ToDoListStore {
    items: Array<CardApi.Card>;
}

const initialState: ToDoListStore = {
    items: []
};

export function toDoListReducer(
    state = initialState,
    action: Redux.AnyAction,
): ToDoListStore {
    switch (action.type) {
        case ToDoListActions.PUT_TODOS: {
            const items = action.payload as Array<CardApi.Card>;

            return {
                items
            };
        }

        case ToDoListActions.CLEAR_TODOS: {
            return initialState;
        }

        default:
            return state;
    }
}