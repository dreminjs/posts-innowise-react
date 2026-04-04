import { useAppDispatch } from "@app/store/hooks";
import { usersApi, setLogout } from "@modules/Users";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(setLogout());
    dispatch(usersApi.util.resetApiState());
  };
};
