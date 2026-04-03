import { Link } from "react-router";
import styles from "./Header.module.css";

export const Logo = () => {
  return (
    <Link className={styles.logo} to={"/"}>
      Posts.by
    </Link>
  );
};
