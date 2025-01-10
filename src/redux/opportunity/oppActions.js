import { createAsyncThunk } from "@reduxjs/toolkit";
import { addOpportunity,editOpportunity ,getOpportunities,getOppType} from "../../api/opp/opportunity.js";
const getOpportunityType= createAsyncThunk(
  "opportunity/type",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getOppType();

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);
const addOpp = createAsyncThunk(
  "opp/add",
  async (data, { rejectWithValue }) => {
    try {
      const response = await addOpportunity(data);
      console.log(response)
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Something went wrong";
      return rejectWithValue(errorMessage);
    }
  }
);
const editOpp = createAsyncThunk(
  "opp/edit",
  async ({id, data} , { rejectWithValue }) => {
    try {
      console.log(id)
      const response = await editOpportunity(id, data);
      console.log(response);
      return response.data;
    } catch (error) {
      const errorMessage =
        error.response?.data || error.message || "Something went wrong";
      return rejectWithValue(errorMessage);
    }
  }
);
const getAllOpportunity = createAsyncThunk(
    "opportunities/all",
    async ({limit,sort,filters}, { rejectWithValue }) => {
      try {
        const response = await getOpportunities({limit,sort,filters} || {});
  
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data);
      }
    }
  );



export { addOpp ,editOpp,getAllOpportunity,getOpportunityType};
