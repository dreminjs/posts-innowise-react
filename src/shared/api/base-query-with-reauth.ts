import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query";
import { baseQuery, baseQueryWithCredentials } from "./base-query";
import { setCurrentUser } from "@modules/Users";
import { logoutAction } from "@modules/Users/model/actions";

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQueryWithCredentials(
      {
        url: "/auth/refresh",
        method: "POST",
        body: {},
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      // const { accessToken, refreshToken: newRefreshToken } =
      //   refreshResult.data as any;

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logoutAction());
    }

    return {
      error: { status: 401, data: "Session expired" } as FetchBaseQueryError,
    };
  }

  return result;
};
