import { Outlet } from "react-router";
import styles from "./BaseLayout.module.css";
import { Header } from "@components/Header";
export const BaseLayout = () => {
  return (
    <div className={styles.baseLayout}>
      <Header />
      <Outlet />
    </div>
  );
};
