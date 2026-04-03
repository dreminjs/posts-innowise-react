import { createApi } from "@reduxjs/toolkit/query/react";
import { TLoginFormDto } from "../model/dtos/login.types";
import { baseQueryWithReauth, Tokens, tokenService } from "@shared/index";
import { addNotification } from "@modules/Notifications/";
import { TLoginResponse } from "../model/dtos/login.types";
import { omitTokensFromLoginResponse } from "../model/omit-tokens-from-login-response.helper";
import {
  GET_ME_TAG,
  setCurrentUser,
  USERS_TAG,
  usersApi,
} from "@modules/Users";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({
    login: builder.mutation<TLoginResponse, TLoginFormDto>({
      query: (credentials) => ({
        url: "auth/login",
        method: "POST",
        body: credentials,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          tokenService.set(data.accessToken);
          dispatch(
            addNotification({ type: "success", message: "Вы успешно вошли" }),
          );
          dispatch(setCurrentUser(omitTokensFromLoginResponse(data)));
          dispatch(usersApi.util.invalidateTags([USERS_TAG, GET_ME_TAG]));
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
