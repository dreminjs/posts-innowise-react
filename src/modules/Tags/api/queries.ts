import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/index";
import { ITag } from "../model/tags.interface";

export const tagsApi = createApi({
  reducerPath: "tagsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getTags: builder.query<ITag[], void>({
      query: () => "/posts/tags",
    }),
  }),
});

export const { useGetTagsQuery } = tagsApi;
