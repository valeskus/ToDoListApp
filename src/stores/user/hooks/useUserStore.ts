import { useSelector } from 'react-redux';
import { RootStore } from '../../rootStore';
import { UserStore } from '../userReducer';

export const useUserStore = () => {
    return useSelector<RootStore, UserStore>(state => state.user);
};