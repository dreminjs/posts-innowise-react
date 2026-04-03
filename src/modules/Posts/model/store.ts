import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPostsStore } from "./posts.interfaces";

const initialState: IPostsStore = {
  choosedTags: [],
  searchQuery: "",
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setSearchQuery: (state, action: PayloadAction<string>) => {
      state.searchQuery = action.payload;
    },
  },
});
