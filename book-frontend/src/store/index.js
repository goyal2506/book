import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../src/slice/counterSlice";
import loginReducer from '../Pages/redux/loginSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login : loginReducer
  },
});
