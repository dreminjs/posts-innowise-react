import { TCreatePostSchema } from "../posts.interfaces";
import { useAppDispatch, useAppSelector } from "@app/store/hooks";
import { addNotification } from "@modules/Notifications";
import { useTags } from "./useTags";
import { UseFormReset } from "react-hook-form";
import { useEffect } from "react";
import { useGetMeQuery } from "@modules/Users";
import { useEditPostByIdMutation } from "@modules/Posts";

interface IArgs {
  choosedTags: string[];
  postId: number;
}

export const useEditPost = ({ choosedTags, postId }: IArgs) => {
  const dispatch = useAppDispatch();

  const { tags, handleAddTag, handleSetTags } = useTags();

  const [editPost, { isLoading }] = useEditPostByIdMutation();

  const { data: user } = useGetMeQuery();

  const handleEdit = async (dto: TCreatePostSchema) => {
    if (tags.length > 1 && user?.id) {
      await editPost({ ...dto, tags, userId: user.id, postId });
    } else {
      dispatch(
        addNotification({ message: "Пожалуйста, выберите тег", type: "error" }),
      );
    }
  };

  useEffect(() => {
    handleSetTags(choosedTags);
  }, [choosedTags]);

  return {
    onEdit: handleEdit,
    isLoading,
    handleAddTag,
    tags,
    handleSetTags,
  };
};
