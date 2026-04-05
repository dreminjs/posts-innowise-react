import { CommentField } from "../CommentField";
import { useCreateCommentForm } from "../.../../../model/hooks/useCreateCommentForm";
import { useCreateComment } from "@modules/Comments/model/hooks/useCreateComment";
import { useParams } from "react-router";
import styles from "./CreateCommentForm.module.css";
import { useGetMeQuery } from "@modules/Users";

export const CreateCommentForm = () => {
  const { id: postId } = useParams<{ id: string }>();
  const { register, handleSubmit, errors, reset } = useCreateCommentForm();
  const { isLoading, handleCreateComment } = useCreateComment({
    postId: Number(postId),
    reset,
  });
  const { data: user } = useGetMeQuery();

  return (
    <form
      className={styles.createCommentForm}
      onSubmit={handleSubmit(handleCreateComment)}
    >
      <CommentField
        register={register}
        name="body"
        error={errors.body?.message}
        placeholder={
          user?.username ? `Write something...` : "Вам нужно авторизоваться..."
        }
      />
      <button
        type="submit"
        className={styles.button}
        disabled={isLoading || !user}
      >
        {isLoading ? "..." : "Send"}
      </button>
    </form>
  );
};
