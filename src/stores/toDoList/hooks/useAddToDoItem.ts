import { useDispatch } from 'react-redux';
import { addToDo } from '../toDoListActions';
import { useUserStore } from '../../user/hooks';
import * as CardApi from '../../../api/card.api';
import { useToDoListStore } from './useToDoListStore';

export const useAddToDoItem = () => {
    const dispatch = useDispatch();

    const { id } = useUserStore();
    const { items } = useToDoListStore();

    return (card: Omit<CardApi.Card, 'index'>) => {
        return addToDo(id, {
            ...card,
            index: items.length
        }, dispatch);
    };
};