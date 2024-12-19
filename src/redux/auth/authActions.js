import { createAsyncThunk } from "@reduxjs/toolkit";
import { Login } from "../../api/auth/auth";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
  try {
    const response = await Login(data);
    return response.data;
  } catch (error) {
  return rejectWithValue(error.response?.data)
  }
  }
);
export { loginUser };
