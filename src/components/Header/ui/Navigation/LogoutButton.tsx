import { useLogout } from "../../model/use-logout";

export const LogoutButton = () => {
  const logout = useLogout();

  return <button onClick={logout}>Logout</button>;
};
