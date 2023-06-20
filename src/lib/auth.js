import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { setUser } from '../redux/userSlice';

/* eslint-disable import/prefer-default-export */
export const useLogout = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const logout = () => {
    dispatch(setUser('DELETE_USER'));
    redirect('/login');
  };

  return logout;
};
