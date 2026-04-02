import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  RootState,
} from "@reduxjs/toolkit/query";
import { baseQuery } from "./base-query";

export const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    const refreshResult = await baseQuery(
      {
        url: "/auth/refresh",
        method: "POST",
        body: {},
      },
      api,
      extraOptions,
    );

    if (refreshResult.data) {
      const { accessToken, refreshToken: newRefreshToken } =
        refreshResult.data as any;

      result = await baseQuery(args, api, extraOptions);
    } else {
    }
    // store.dispatch(logout());

    return {
      error: { status: 401, data: "Session expired" } as FetchBaseQueryError,
    };
  }

  return result;
};
