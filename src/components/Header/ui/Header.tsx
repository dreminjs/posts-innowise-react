import styles from "./Header.module.css";
import { Logo } from "./Logo";
import { NavigationList } from "./Navigation/NavigationList";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
      <NavigationList />
    </header>
  );
};
