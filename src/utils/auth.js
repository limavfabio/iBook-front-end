import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUsername as setUsernameRedux } from "../redux/userSlice";

export const useLogout = () => {
  const dispatch = useDispatch();
  const redirect = useNavigate();

  const logout = () => {
    dispatch(setUsernameRedux(""));
    redirect("/login");
  };

  return logout;
};
