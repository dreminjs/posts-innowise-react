import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUsersStore } from "./users.interface";
import { logoutAction } from "./actions";
import { tokenService } from "@shared/index";

const initialState: IUsersStore = {
  isLoading: false,
  isError: false,
  currentUser: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    setLogout: (state) => {
      state.currentUser = null;
      tokenService.clear();
    },
    setIsError: (state, action: PayloadAction<boolean>) => {
      state.isError = action.payload;
      tokenService.clear();
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logoutAction, (state) => {
      state.currentUser = null;
      tokenService.clear();
    });
  },
});

export const { setIsLoading, setCurrentUser, setIsError, setLogout } =
  usersSlice.actions;
