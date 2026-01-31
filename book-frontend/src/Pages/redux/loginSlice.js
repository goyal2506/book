import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { showToast } from "../../utils/toast";

export const loginUser = createAsyncThunk(
  "login/loginUser",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "http://localhost:8001/user/login",
        { email, password },
        { headers: { "Content-Type": "application/json" } }
      );

      showToast.create({
        type: "success",
        title: "Success",
        description: response.data.message || "Login successful",
      });

      return response.data;
    } catch (error) {
      let description = "Something went wrong";
      if (axios.isAxiosError(error)) {
        description = error.response?.data?.message || description;
      }

      showToast.create({
        type: "warning",
        title: "Login failed",
        description,
      });

      return rejectWithValue(description);
    }
  }
);

const initialState = {
  user: null,
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
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Failed to login";
      });
  },
});

export const { logout } = loginSlice.actions;
export default loginSlice.reducer;
