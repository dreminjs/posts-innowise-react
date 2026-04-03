import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQuery } from "@shared/index";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => "/posts",
    }),
    getPostTags: builder.query({
      query: () => "/tags",
    }),
  }),
});

export const { useGetPostsQuery, useGetPostTagsQuery } = postsApi;
