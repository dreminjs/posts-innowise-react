import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITagsState, TSlug } from "./tags.interface";

const initialState: ITagsState = {
  tags: [],
};

export const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    setChoosedTags: (state, action: PayloadAction<TSlug>) => {
      state.tags.push(action.payload);
    },
    removeChoosedTag: (state, action: PayloadAction<TSlug>) => {
      state.tags = state.tags.filter((tag) => tag !== action.payload);
    },
  },
});
