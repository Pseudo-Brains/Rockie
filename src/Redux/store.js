import { configureStore } from "@reduxjs/toolkit";
import marketReducer from "./market/marketSlice";

export const store = configureStore({
  reducer: {
    [marketReducer.name]: marketReducer.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
      immutableCheck: false,
    }),
});
