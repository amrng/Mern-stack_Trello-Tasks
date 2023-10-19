import { configureStore } from "@reduxjs/toolkit";
import { taskReducer } from "./taskaSlice";

export const store = configureStore({
  reducer: {
    Tasks: taskReducer,
  },
});
