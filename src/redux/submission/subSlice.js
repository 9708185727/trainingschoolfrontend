import { createSlice } from "@reduxjs/toolkit";
import { 
  addSubmissions, 
  editSubmissions, 

  getAllSubmissions 
} from "./subActions";

// Initial state for query parameters (filters, sort, limit)
const initialQueryState = {
  filters: {
    opportunityId: "",
    createdBy: "",
    status: "",
  },
  
  sort: JSON.stringify({ createdAt: -1 }), // Default sorting by creation date
  limit: 10,
};

const subSlice = createSlice({
  name: "submission",
  initialState: {
  loading: false,
  submissions: [],
  error: null,
    
    query: initialQueryState,  // To manage query parameters for fetching submissions
  },
  reducers: {
    // Action to set the limit of submissions to fetch
    setLimit: (state, action) => {
      state.query.limit = action.payload;
    },
    // Action to set the sort parameter for submissions
    setSort: (state, action) => {
      state.query.sort = action.payload;
    },
    // Action to set the filter parameters (e.g., title, type)
    setFilters: (state, action) => {
      state.query.filters = { ...state.query.filters, ...action.payload };
    },
    // Action to reset the query to its initial state
    resetQuery: (state) => {
      state.query = initialQueryState;
    },
  },
  extraReducers: (builder) => {
    // Add Submission
    builder.addCase(addSubmissions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(addSubmissions.fulfilled, (state, action) => {
      state.submissions.push(action.payload);
      state.loading = false;
    });
    builder.addCase(addSubmissions.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // Get All Submissions
    builder.addCase(getAllSubmissions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(getAllSubmissions.fulfilled, (state, action) => {
      state.submissions = action.payload;
      state.loading = false;
    });
    builder.addCase(getAllSubmissions.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // Edit Submission
    builder.addCase(editSubmissions.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(editSubmissions.fulfilled, (state, action) => {
      const index = state.submissions.findIndex(
        (submission) => submission._id === action.payload._id
      );
      if (index !== -1) {
        state.submissions[index] = action.payload;
      }
      state.loading = false;
    });
    builder.addCase(editSubmissions.rejected, (state, action) => {
      state.error = action.payload;
      state.loading = false;
    });

    // Get Submission Types
    // builder.addCase(getSubmissionTypes.fulfilled, (state, action) => {
    //   state.types = action.payload;
    //   state.loading = false;
    // });
    // builder.addCase(getSubmissionTypes.rejected, (state, action) => {
    //   state.error = action.payload;
    //   state.loading = false;
    // });
  },
});

// Export actions to be dispatched from components
export const { setLimit, setSort, setFilters, resetQuery } = subSlice.actions;

export default subSlice.reducer;
