import { createSlice } from "@reduxjs/toolkit";

import { addOpp, editOpp,getOpportunityType,getAllOpportunity } from "./oppActions";

const initailQueryState={
  filters:{
    title:"",
    type:"",
  },
  sort:JSON.stringify({createdAt:-1}),
  limit:10
}
const oppSlice = createSlice({
  name: "opp",
  initialState: {
    loading: false,
    opportunity:[],
    error: null,
    type: [],
    query:initailQueryState,
  },
  reducers: {
    setLimit: (state, action) => {
      state.query.limit = action.payload;
    },
    setSort: (state, action) => {
      state.query.sort = action.payload;
    },
    setFilters: (state, action) => {
      state.query.filters = {...state.query.filters,...action.payload};
    },
    resetQuery:(state)=>{
      state.query=initailQueryState;
    }
  },
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
      }).addCase(getOpportunityType.fulfilled, (state, action) => {
        state.loading = false;
        state.type = action.payload;
      })
      .addCase(getOpportunityType.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });;
  },
});
export const { setLimit,setSort,setFilters,resetQuery} = oppSlice.actions;
export default oppSlice.reducer;
