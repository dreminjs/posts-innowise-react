import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  INotificationState,
  TCreateNotification,
} from "./notification.interfaces";

const initialState: INotificationState = {
  notifications: [],
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<TCreateNotification>) => {
      state.notifications.push({
        ...action.payload,
        id: crypto.randomUUID(),
      });
    },
    removeNotification: (state, action: PayloadAction<string>) => {
      state.notifications = state.notifications.filter(
        (n) => n.id !== action.payload,
      );
    },
  },
});

export const { addNotification, removeNotification } =
  notificationSlice.actions;
