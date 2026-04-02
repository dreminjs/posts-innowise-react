import { FC, ReactNode } from "react";
import styles from "./LoginForm.module.css";

interface ILoginFormWrapper {
  children: ReactNode;
}

export const LoginFormWrapper: FC<ILoginFormWrapper> = ({ children }) => {
  return (
    <div className={styles.loginFormWrapper}>
      <h3 className={styles.loginFormTitle}>Sign in</h3>
      {children}
    </div>
  );
};
