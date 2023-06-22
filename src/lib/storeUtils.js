import { useSelector } from 'react-redux';

/* eslint-disable import/prefer-default-export */
export function getUsernameFromStore() {
  return useSelector((state) => state.user.username);
}
