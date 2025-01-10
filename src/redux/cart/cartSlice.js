import { createSlice } from "@reduxjs/toolkit";
import reducer from "../opportunity/oppSlice";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    opportunity: [],
  },
  reducers: {
    AddOppToCart: (state, action) => {
      const existingItem = state.opportunity.find(
        (cartItem) => cartItem._id === action.payload._id
      );

      if (existingItem) {
    
        existingItem.quantity += 1;
      } else {
        // If it doesn't exist, add it with a quantity of 1
        state.opportunity.push({ ...action.payload, quantity: 1 });
      }
    },
    RemoveOppFromCart: (state, action) => {
       state.opportunity=state.opportunity.filter((item)=>item._id!=action.payload)
    },
  
  },
});
export const { AddOppToCart, RemoveOppFromCart } = cartSlice.actions;
export default cartSlice.reducer;
