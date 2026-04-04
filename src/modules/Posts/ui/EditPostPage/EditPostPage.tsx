import { useGetPostByIdQuery } from "@modules/Posts";
import { EditPostForm } from "./EditPostForm";
import { useNavigate, useParams } from "react-router";
import { useEffect } from "react";
import { useGetMeQuery } from "@modules/Users";

export const EditPostPage = () => {
  const { postId } = useParams<{ postId: string }>();

  const { data: post, isLoading } = useGetPostByIdQuery(Number(postId));

  const { data: currentUser } = useGetMeQuery();

  const navigate = useNavigate();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Не найден</div>;
  }

  // useEffect(() => {
  //   if (currentUser?.id !== post.userId) {
  //     navigate("/");
  //   }
  // }, [currentUser, post, navigate]);

  return (
    <div>
      <EditPostForm {...post} />
    </div>
  );
};
