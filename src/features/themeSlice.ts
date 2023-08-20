import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";

const initialState = {
  theme: "light",
};

if (
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  initialState.theme = "dark";
}

const localTheme = localStorage.getItem("theme");
if (localTheme) {
  initialState.theme = localTheme;
}

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (state, action) => {
      state.theme = action.payload;
      localStorage.setItem("theme", action.payload);
    },
  },
});

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
