import { Link } from "react-router";
import styles from "./Navigation.module.css";
import { useGetMeQuery } from "@modules/Users";
import { NavigationItem } from "./NavigationItem";
import { LogoutButton } from "./LogoutButton";
import { useAppSelector } from "@app/store/hooks";

export const NavigationList = () => {
  const { data } = useGetMeQuery();

  return (
    <nav>
      <ul className={styles.navigationList}>
        {data ? (
          <>
            <NavigationItem to={"/profile"} content={"Profile"} />
            <LogoutButton />
          </>
        ) : (
          <NavigationItem to="/login" content="Login" />
        )}
      </ul>
    </nav>
  );
};
