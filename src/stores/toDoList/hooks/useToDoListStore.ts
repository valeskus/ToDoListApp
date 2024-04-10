import { useSelector } from 'react-redux';
import { RootStore } from '../../rootStore';
import { ToDoListStore } from '../toDoListReducer';

export const useToDoListStore = () => {
    return useSelector<RootStore, ToDoListStore>(state => state.toDoList);
};