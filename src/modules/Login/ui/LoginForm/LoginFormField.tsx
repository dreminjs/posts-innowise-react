import { UseFormRegister } from "react-hook-form";
import { TLoginFormDto } from "../../model/dtos/login.types";
import { FC } from "react";
import styles from "./LoginForm.module.css";

interface ILoginFormFieldProps {
  register: UseFormRegister<TLoginFormDto>;
  label: string;
  name: keyof TLoginFormDto;
  placeholder: string;
  error?: string;
}

export const LoginFormField: FC<ILoginFormFieldProps> = ({
  register,
  label,
  name,
  placeholder,
  error,
}) => {
  return (
    <div className={styles.loginFormField}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        {...register(name)}
        className={styles.loginFormInput}
      />
      {error && (
        <span className={styles.loginFormInputError}>{error.toString()}</span>
      )}
    </div>
  );
};
