import { useDispatch } from 'react-redux';
import { getUser } from '../userActions';


export const useGetUser = () => {
  const dispatch = useDispatch();

  return () => {
    getUser(dispatch);
  };
};