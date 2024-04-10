import { Dispatch } from 'redux';

import * as CardApi from '../../api/card.api';

export enum ToDoListActions {
    PUT_TODOS = '@todoList/put',
    CLEAR_TODOS = '@todoList/clear',
    ERROR = '@error/card',
}

const actionPutToDos = (cards: Array<CardApi.Card>) => ({
    type: ToDoListActions.PUT_TODOS,
    payload: cards,
});

const actionClearToDos = () => ({
    type: ToDoListActions.CLEAR_TODOS,
});

const actionError = (error: unknown) => ({
    type: ToDoListActions.ERROR,
    payload: error,
});

export const clearToDos = (dispatch: Dispatch) => {
    dispatch(actionClearToDos());
}

export const addToDo = async (
    userId: string,
    cardInfo: CardApi.Card,
    dispatch: Dispatch
) => {
    try {
        const items = await CardApi.add(userId, cardInfo);

        dispatch(actionPutToDos(items));
    } catch (error) {
        dispatch(actionError(error));
    }
};

export const getToDos = async (
    userId: string,
    dispatch: Dispatch
) => {
    try {
        const items = await CardApi.get(userId);
        dispatch(actionPutToDos(items));
    } catch (error) {
        dispatch(actionError(error));
    }
}
