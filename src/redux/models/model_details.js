import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_OPERATION_DETAILS = 'final_capstone_frontend/models/FETCH_PRODUCTS_DETAILS';

// Async function (Function Action Creator)
const fetchDetailsAsync = createAsyncThunk(
  FETCH_OPERATION_DETAILS,
  async (id) => {
    const modelURL = `http://localhost:3000/api/v1/products/${id}`;
    const response = await fetch(modelURL);
    const output = await response.json();
    return output;
  },
);

// Reducer
const initialState = {};

const detailSlice = createSlice({
  name: 'details',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchDetailsAsync.fulfilled, (state, action) => (
      { ...action.payload }
    ));
  },
});

export { fetchDetailsAsync };

export default detailSlice.reducer;
