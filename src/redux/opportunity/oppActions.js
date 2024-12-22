import { createAsyncThunk } from "@reduxjs/toolkit";
import { addOpportunity } from "../../api/opp/opportunity.js";

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
const getAllOpportunity = createAsyncThunk(
    "opportunities/all",
    async ({limit,sort,filters}, { rejectWithValue }) => {
      try {
        const response = await getOpp({limit,sort,filters} || {});
  
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data);
      }
    }
  );
  const getProductType= createAsyncThunk(
    "Opportunities/types",
    async (_, { rejectWithValue }) => {
      try {
        const response = await getTypes();
  
        return response.data;
      } catch (error) {
        return rejectWithValue(error.response?.data);
      }
    }
  );


export { addOpp ,getAllOpportunity,getProductType};
