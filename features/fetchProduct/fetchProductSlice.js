const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  loading: false,
  products: [],
};

const fetchProductSlice = createSlice({
  name: "fetchProduct",
  initialState,
  reducers: {},
});

export default fetchProductSlice.reducer;
