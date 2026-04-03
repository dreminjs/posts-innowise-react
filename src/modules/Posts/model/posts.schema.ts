import z from "zod";

export const findPostsByQueryParamsSchema = z.object({
  q: z.string().optional(),
});

export const findPostsByTagsQueryParamsSchema = z.object({
  tags: z.string().optional(),
});
