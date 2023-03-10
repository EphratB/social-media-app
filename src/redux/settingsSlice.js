import { createSlice } from "@reduxjs/toolkit";

export const settingsSlice = createSlice({
  name: "settings",
  initialState: {
    allowLikes: true,
    allowDislikes: true,
  },
  reducers: {
    toggleAllowLikes: (state) => {
      state.allowLikes = !state.allowLikes;
    },
    toggleDislikes: (state) => {
      state.allowDislikes = !state.allowDislikes;
    },
  },
});
export const { toggleAllowLikes, toggleDislikes } = settingsSlice.actions;
export default settingsSlice.reducer;
