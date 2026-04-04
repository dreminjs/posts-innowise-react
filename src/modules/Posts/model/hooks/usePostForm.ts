import { useForm } from "react-hook-form";
import { TCreatePostSchema } from "../posts.interfaces";
import { createPostSchema } from "../posts.schema";
import { zodResolver } from "@hookform/resolvers/zod";

type TDefualtValues = Partial<TCreatePostSchema>;

export const usePostForm = ({ title, body }: TDefualtValues = {}) => {
  const { register, handleSubmit, reset } = useForm<TCreatePostSchema>({
    resolver: zodResolver(createPostSchema),
    defaultValues: { title, body },
  });

  return { register, handleSubmit, reset };
};
