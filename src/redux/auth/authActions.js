import { createAsyncThunk } from "@reduxjs/toolkit";
import { Login,Register } from "../../api/auth/auth.js";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Login(data);
      localStorage.setItem("authToken", response.data?.token);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Something went wrong";
      return rejectWithValue(errorMessage);
    }
  }
);

const registerUser = createAsyncThunk(
  "auth/register",
  async (data, { rejectWithValue }) => {
    try {
      const response = await Register(data);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
export { loginUser,registerUser };
