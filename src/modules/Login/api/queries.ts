import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TLoginFormDto } from "../model/dtos/login.types";
import { baseQueryWithReauth, Tokens } from "@shared/index";
import { addNotification } from "@modules/Notifications/";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<Tokens, TLoginFormDto>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          dispatch(
            addNotification({ type: "success", message: "Вы успешно вошли" }),
          );
        } catch {
          dispatch(
            addNotification({
              type: "error",
              message: "Неверный логин или пароль",
            }),
          );
        }
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
