import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Repos, ReposLangs } from "../api/reposApi";

export interface ReposFullDetail extends Repos {
  languages: ReposLangs;
}

const initialState: ReposFullDetail[] = [] as ReposFullDetail[];

export const reposSlice = createSlice({
  name: "repos",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {},
  extraReducers: (builder) => {
  },
});

export const selectReposList = (state: RootState) => state.repos;

export default reposSlice.reducer;
