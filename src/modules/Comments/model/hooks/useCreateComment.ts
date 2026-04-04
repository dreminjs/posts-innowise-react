import { useCreateCommentMutation } from "@modules/Comments/api/queries";
import { TCreateCommentForm } from "../comments.interface";
import { useGetMeQuery } from "@modules/Users";

export const useCreateComment = (postId: number) => {
  const [createComment, { isLoading }] = useCreateCommentMutation();
  const { data: user } = useGetMeQuery();
  const handleCreateComment = (data: TCreateCommentForm) => {
    createComment({
      body: data.body,
      postId: postId,
      userId: user!.id,
    });
  };

  return {
    isLoading,
    handleCreateComment,
  };
};
