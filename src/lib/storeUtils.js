import { useSelector } from 'react-redux';

export function getUsernameFromStore() {
  return useSelector((state) => state.user.username);
}
