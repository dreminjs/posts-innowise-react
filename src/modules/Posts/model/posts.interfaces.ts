import z from "zod";
import {
  findPostsByQueryParamsSchema,
  findPostsByTagsQueryParamsSchema,
} from "./posts.schema";

export type FindPostsQueryParams = z.infer<typeof findPostsByQueryParamsSchema>;

export type FindPostsByTagsQueryParams = z.infer<
  typeof findPostsByTagsQueryParamsSchema
>;

export interface IPostsStore {
  choosedTags: string[];
  searchQuery: string;
}
