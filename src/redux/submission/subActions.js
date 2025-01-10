import { createAsyncThunk } from "@reduxjs/toolkit";
import {getSubmission,addSubmission,editSubmission,getSubmissionType} from "../../api/sub/submission.js"
const getAllSubmissions = createAsyncThunk(
  "submissions/all",
  async ({ limit, sort, filters } = {}, { rejectWithValue }) => {
    try {
      const response = await getSubmission({ limit, sort, filters });
      console.log(response);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data || "Failed to fetch submissions";
      return rejectWithValue(errorMessage);
    }
  }
);
// const getSubmissionTypes = createAsyncThunk(
//   "submission/types",
//   async (_, { rejectWithValue }) => {
//     try {
//       const response = await getSubmissionType();
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Failed to fetch submission types");
//     }
//   }
// );

// Add Submission
const addSubmissions = createAsyncThunk(
  "submission/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addSubmission(data);
      
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data || error.message || "Failed to add submission";
      return rejectWithValue(errorMessage);
    }
  }
);

// Edit Submission
const editSubmissions = createAsyncThunk(
  "submission/edit",
  async ({ id, data }, { rejectWithValue }) => {
    try {
      console.log(id);
      const response = await editSubmission(id, data);
      console.log(response);
      return response.data;
    } catch (error) {
      const errorMessage = error.response?.data || error.message || "Failed to edit submission";
      return rejectWithValue(errorMessage);
    }
  }
);

// Get All Submissions


export {addSubmissions, editSubmissions, getAllSubmissions };
