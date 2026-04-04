import { Outlet } from "react-router";
import { Header } from "@components/Header";
import styles from "./BaseLayout.module.css";
export const BaseLayout = () => {
  return (
    <div className={styles.baseLayout}>
      <Header />
      <Outlet />
    </div>
  );
};
