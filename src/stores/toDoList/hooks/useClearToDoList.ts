import { useDispatch } from 'react-redux';
import { clearToDos } from '../toDoListActions';

export const useClearToDoList = () => {
    const dispatch = useDispatch();

    return () => {
        clearToDos(dispatch);
    };
};