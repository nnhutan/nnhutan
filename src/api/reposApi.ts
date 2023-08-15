import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Repos {
  id: number;
  name: string;
  full_name: string;
  private: boolean;
  owner: {
    login: string;
    id: number;
    avatar_url: string;
    url: string;
    html_url: string;
  };
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  homepage: string;
  language: string;
}

export interface ReposLangs {
  [key: string]: number;
}

export const reposApi = createApi({
  reducerPath: "reposApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/",
  }),
  endpoints: (builder) => ({
    getRepos: builder.query<Repos[], undefined>({
      query: () => `users/nnhutan/repos?sort=updated&direction=desc`,
    }),
    getReposLanguages: builder.query<ReposLangs, string>({
      query: (name) => `repos/nnhutan/${name}/languages`,
    }),
  }),
});

export const { useGetReposQuery, useGetReposLanguagesQuery } = reposApi;
