import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const signupUser = createAsyncThunk(
  "signup/signupUser",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/user/signup",
        userData,
        { headers: { "Content-Type": "application/json" } }
      );

      toast({
        title: "Success",
        description: response.data.message || "Signup successful",
        status: "success",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      return response.data;
    } catch (error) {
      let message = "Something went wrong";

      if (axios.isAxiosError(error)) {
        message = error.response?.data?.message || error.message || message;
      } else if (error instanceof Error) {
        message = error.message;
      }

      toast({
        title: "Signup Failed",
        description: message,
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
      });

      return rejectWithValue(message);
    }
  }
);

const initialState = {
  user: null,
  loading: false,
  error: null,
};

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    resetSignupState: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to signup";
      });
  },
});

export const { resetSignupState } = signupSlice.actions;
export default signupSlice.reducer;
