import { useDispatch } from 'react-redux';
import { editToDo } from '../toDoListActions';
import { useUserStore } from '../../user/hooks';
import * as CardApi from '../../../api/card.api';


export const useEditToDoItem = () => {
    const dispatch = useDispatch();

    const { id } = useUserStore();
    return (card: CardApi.Card) => {
        return editToDo(id, card, dispatch);
    };
};