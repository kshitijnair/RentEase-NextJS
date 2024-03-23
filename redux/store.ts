"use client";

import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Features/authenticate/authenticate";

export const store = configureStore({
  reducer: {
    authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;