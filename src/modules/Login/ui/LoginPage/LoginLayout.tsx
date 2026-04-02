import { FC, ReactNode } from "react";
import styles from "./LoginPage.module.css";

interface ILoginLayoutProps {
  children: ReactNode;
}

export const LoginLayout: FC<ILoginLayoutProps> = ({ children }) => {
  return <div className={styles["loginPageLayout"]}>{children}</div>;
};
