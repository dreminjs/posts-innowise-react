import z from "zod";
import { paginationSchema } from "../schemas/api.schema";

export type TPaginationQueryParams = z.infer<typeof paginationSchema>;

export interface IAPIResponse {
  total: number;
  skip: number;
  limit: number;
}
