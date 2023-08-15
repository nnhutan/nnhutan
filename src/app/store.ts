import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import reposReducer from "../features/reposSlice";
import { reposApi } from "../api/reposApi";

export const store = configureStore({
  reducer: {
    repos: reposReducer,
    [reposApi.reducerPath]: reposApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      reposApi.middleware,
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
