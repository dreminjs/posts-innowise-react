import { useAppDispatch } from "@app/store/hooks";
import { usersApi, setLogout, USERS_TAG, GET_ME_TAG } from "@modules/Users";

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return () => {
    dispatch(setLogout());
    dispatch(usersApi.util.resetApiState());
  };
};
