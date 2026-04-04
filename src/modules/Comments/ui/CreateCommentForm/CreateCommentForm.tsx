import { CreateCommentField } from "./CreateCommentField";
import { useCreateCommentForm } from "../.../../../model/hooks/useCreateCommentForm";
import { useCreateComment } from "@modules/Comments/model/hooks/useCreateComment";
import { useParams } from "react-router";
import styles from "./CreateCommentForm.module.css";

export const CreateCommentForm = () => {
  const { postId } = useParams<{ postId: string }>();
  const { register, handleSubmit, errors } = useCreateCommentForm();
  const { isLoading, handleCreateComment } = useCreateComment(Number(postId));

  return (
    <form className={styles.form} onSubmit={handleSubmit(handleCreateComment)}>
      <CreateCommentField
        register={register}
        name="body"
        error={errors.body?.message}
      />
      <button type="submit" className={styles.button} disabled={isLoading}>
        {isLoading ? "..." : "Send"}
      </button>
    </form>
  );
};
