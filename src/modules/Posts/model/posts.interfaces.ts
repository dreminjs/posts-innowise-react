import { createPostSchema, findPostsByQueryParamsSchema } from "./posts.schema";
import { TSlug } from "@modules/Tags/";
import { IAPIResponse } from "@shared/index";
import z from "zod";

export type TFindPostsQueryParams = z.infer<
  typeof findPostsByQueryParamsSchema
>;

export type TFindPostsByUserIdQueryParams = Omit<
  TFindPostsQueryParams,
  "tag" | "q"
> & { userId: number };

export interface IPostsStore {
  tagQuery: TSlug;
  searchQuery: string;
  postIdToDelete: number | null;
}

export interface IPost {
  id: number;
  title: string;
  body: string;
  tags: TSlug[];
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface IPostsResponse extends IAPIResponse {
  posts: IPost[];
}

export type TCreatePostDto = z.infer<typeof createPostSchema> & {
  tags: TSlug[];
  userId: number;
};

export type TCreatePostSchema = z.infer<typeof createPostSchema>;

export type TUpdatePostDto = TCreatePostDto & {
  postId: number;
};
