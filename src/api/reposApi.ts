import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const githubToken = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

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
    prepareHeaders: (headers) => {
      headers.set("authorization", `Bearer ${githubToken}`);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getRepos: builder.query<Repos[], undefined>({
      query: () => `users/nnhutan/repos?sort=pushed&direction=desc`,
    }),
    getOrgRepos: builder.query<Repos[], undefined>({
      query: () => `orgs/langexchange/repos?sort=pushed&direction=desc`,
    }),
    getReposOrgLanguages: builder.query<ReposLangs, string>({
      query: (name) => `repos/langexchange/${name}/languages`,
    }),
    getReposLanguages: builder.query<ReposLangs, string>({
      query: (name) => `repos/nnhutan/${name}/languages`,
    }),
  }),
});

export const {
  useGetReposQuery,
  useGetReposLanguagesQuery,
  useGetOrgReposQuery,
  useGetReposOrgLanguagesQuery,
} = reposApi;
