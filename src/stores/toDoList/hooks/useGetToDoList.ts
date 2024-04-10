import { useDispatch } from 'react-redux';
import { getToDos } from '../toDoListActions';
import { useUserStore } from '../../user/hooks';

export const useGetToDoList = () => {
  const dispatch = useDispatch();

  const { id } = useUserStore();

  return () => {
    return getToDos(id, dispatch);
  };
};