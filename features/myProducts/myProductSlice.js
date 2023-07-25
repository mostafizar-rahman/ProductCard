import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toggle: false,
  carttoggle: false,
};
const myProductSlice = createSlice({
  name: "myProduct",
  initialState,
  reducers: {
    whiteListClose: (state, action) => {
      state.toggle = false;
    },
    whiteListOpen: (state, action) => {
      state.toggle = true;
    },
    cartListClose: (state, action)=>{
        state.carttoggle = false;
    },
    cartListOpen: (state, action)=>{
        state.carttoggle = true;
    }
  },
});


export const { whiteListClose, whiteListOpen, cartListClose, cartListOpen } = myProductSlice.actions;
export default myProductSlice.reducer;
