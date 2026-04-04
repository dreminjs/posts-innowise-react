import z from "zod";

export const createCommentFormSchema = z.object({
  body: z.string(),
});
