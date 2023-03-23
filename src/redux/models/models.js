import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Actions
const FETCH_OPERATIONS_MODELS = 'final_capstone_frontend/models/FETCH_OPERATIONS_MODELS';
const ADD_OPERATION_MODEL = 'final_capstone_frontend/models/ADD_OPERATION_MODEL';
const DELETE_OPERATION_MODEL = 'final_capstone_frontend/models/DELETE_OPERATION_MODEL';

// URL http://localhost:3000/
const modelsURL = 'http://localhost:3000/api/v1/products';

// Async function (Function Action Creator)
const fetchModelsAsync = createAsyncThunk(
  FETCH_OPERATIONS_MODELS,
  async () => {
    const response = await fetch(modelsURL);
    const output = await response.json();
    return output;
  },
);

const addProductAsync = createAsyncThunk(
  ADD_OPERATION_MODEL,
  async (product) => {
    await fetch(modelsURL, {
      method: 'POST',
      body: JSON.stringify(product),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    return { ...product };
  },
);

const deleteProductAsync = createAsyncThunk(
  DELETE_OPERATION_MODEL,
  async (id) => {
    await fetch(`${modelsURL}/${id}`, {
      method: 'DELETE',
    });
    return id;
  },
);

// Reducer
const initialState = [];

const modelSlice = createSlice({
  name: 'models',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchModelsAsync.fulfilled, (state, action) => (
        [...action.payload]
      ))
      .addCase(addProductAsync.fulfilled, (state, action) => (
        [...state, { ...action.payload }]
      ))
      .addCase(deleteProductAsync.fulfilled, (state, action) => {
        const id = action.payload;
        return state.filter((product) => product.id !== id);
      });
  },
});

export {
  fetchModelsAsync, addProductAsync, deleteProductAsync,
};

export default modelSlice.reducer;
