import { useDispatch } from 'react-redux';
import { signOut } from '../userActions';
import { useClearToDoList } from '../../toDoList/hooks/useClearToDoList';

export const useSignOut = () => {
    const dispatch = useDispatch();

    const clearToDos = useClearToDoList()

    return () => {
        signOut(dispatch);
        clearToDos()
    };
};