import { createSlice } from "@reduxjs/toolkit";

import { addOpp } from "./oppActions";
import { getAllOpportunity } from "./oppActions";

const oppSlice = createSlice({
  name: "opp",
  initialState: {
    loading: false,
    opportunity: null,
    error: null,
  },
  reducers: {
 
  },
  extraReducers: (builder) => {
     builder
     .addCase(addOpp.pending, (state) => {
        state.loading = true;
        state.error=null;
      })
      .addCase(addOpp.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;

      })
      .addCase(addOpp.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllOpportunity.pending, (state) => {
        state.loading = true;
        state.error=null;
      })
      .addCase(getAllOpportunity.fulfilled, (state, action) => {
        state.user = action.payload;
        state.loading = false;

      })
     
     .addCase(getAllOpportunity.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
  
  },
});

export default oppSlice.reducer;
