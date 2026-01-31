import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../../src/slice/counterSlice";
import loginReducer from '../Pages/redux/loginSlice'
import signupReducer from "../Pages/redux/signupSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    login : loginReducer,
    signup: signupReducer,
  },
});
