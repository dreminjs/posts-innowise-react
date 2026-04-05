import { TCreateCommentForm } from "@modules/Comments/model/comments.interface";
import { UseFormRegister } from "react-hook-form";
import { FC } from "react";
import styles from "./CreateCommentForm/CreateCommentForm.module.css";

interface ICommentFieldProps {
  register: UseFormRegister<TCreateCommentForm>;
  name: keyof TCreateCommentForm;
  error?: string;
  placeholder?: string;
}

export const CommentField: FC<ICommentFieldProps> = ({
  register,
  name,
  error,
  placeholder,
}) => {
  return (
    <div className={styles.createCommentField}>
      <textarea
        {...register(name)}
        className={styles.textarea}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};
