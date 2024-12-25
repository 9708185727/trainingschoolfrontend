import { createSlice } from "@reduxjs/toolkit";

import { addOpp, editOpp } from "./oppActions";
import { getAllOpportunity } from "./oppActions";

const oppSlice = createSlice({
  name: "opp",
  initialState: {
    loading: false,
    opportunity:[],
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOpp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addOpp.fulfilled, (state, action) => {
        state.opportunity = action.payload;
        state.loading = false;
      })
      .addCase(addOpp.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(getAllOpportunity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllOpportunity.fulfilled, (state, action) => {
        state.opportunity = action.payload;
        state.loading = false;
      })

      .addCase(getAllOpportunity.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })

      .addCase(editOpp.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(editOpp.fulfilled, (state, action) => {
        state.opportunity = action.payload;
        state.loading = false;
      })

      .addCase(editOpp.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      });
  },
});

export default oppSlice.reducer;
