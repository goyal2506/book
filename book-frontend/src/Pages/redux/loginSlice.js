import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { createStandaloneToast } from "@chakra-ui/react";

const { toast } = createStandaloneToast();

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/user/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      toast({
        title: "Success",
        description: response.data.message || "Login successful",
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
        title: "Login Failed",
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
  token: localStorage.getItem("token") || null,
  loading: false,
  error: null,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user || null;
        state.token = action.payload.token;
        localStorage.setItem("token", action.payload.token); 
        localStorage.setItem("role", action.payload.role); 
        localStorage.setItem("name", action.payload.name); 
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to login";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
