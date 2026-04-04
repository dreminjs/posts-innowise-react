import { UseFormRegister } from "react-hook-form";
import { TCreatePostSchema } from "../../model/posts.interfaces";
import { FC } from "react";
import styles from "./PostFormField.module.css";

interface IPostFormFieldProps {
  name: keyof TCreatePostSchema;
  label: string;
  tag: "input" | "textarea";
  register: UseFormRegister<TCreatePostSchema>;
  error?: string;
}

export const PostFormField: FC<IPostFormFieldProps> = ({
  name,
  label,
  tag: Tag,
  register,
  error,
}) => {
  return (
    <div className={styles.postField}>
      <label className={styles.postLabel} htmlFor={name}>
        {label}
      </label>
      <Tag id={name} className={styles[Tag]} {...register(name)} />
      {error && <span className={styles.postError}>{error}</span>}
    </div>
  );
};
