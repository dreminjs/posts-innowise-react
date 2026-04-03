import { Link } from "react-router";
import styles from "./Navigation.module.css";
import { FC } from "react";

interface NavigationItemProps {
  to: string;
  content: string;
}

export const NavigationItem: FC<NavigationItemProps> = ({ to, content }) => {
  return (
    <li>
      <Link className={styles.navLink} to={to}>
        {content}
      </Link>
    </li>
  );
};
