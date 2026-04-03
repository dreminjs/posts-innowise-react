import { fetchBaseQuery } from "@reduxjs/toolkit/query";
import { RootState } from "../../app/store/store";
import { tokenService } from "@shared/model/tokenService";

export const baseQuery = fetchBaseQuery({
  baseUrl: "https://dummyjson.com",
  // credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = tokenService.get();
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseQueryWithCredentials = fetchBaseQuery({
  baseUrl: "https://dummyjson.com",
  credentials: "include",
  prepareHeaders: (headers, { getState }) => {
    const token = tokenService.get();
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});
