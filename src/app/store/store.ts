import { authApi } from "@modules/Login";
import { configureStore } from "@reduxjs/toolkit";
import { usersApi, usersSlice } from "@modules/Users";
import { tagsApi } from "@modules/Tags";
import { notificationSlice } from "@modules/Notifications";

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [tagsApi.reducerPath]: tagsApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
    notification: notificationSlice.reducer,
    users: usersSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(tagsApi.middleware)
      .concat(usersApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type TAppDispatch = typeof store.dispatch;
