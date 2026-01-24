import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../src/slice/counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
