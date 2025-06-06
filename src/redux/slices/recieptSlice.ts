import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ReceiptsState, Receipt } from '../types';
import API from "../../api/apiClass";

export const fetchReceipts = createAsyncThunk<Receipt[], void, { rejectValue: string }>(
  'receipts/fetchReceipts',
  async (_, thunkAPI) => {
    try {
      const { data } = await API.call('/receipts/list-receipts', {
            method: "get",
          });
      return data;
    } catch (err: any) {
      return thunkAPI.rejectWithValue(err.response?.data?.message || 'Failed to fetch receipts');
    }
  }
);

const initialState: ReceiptsState = {
  receipts: [],
  loading: false,
  error: null,
};

const receiptsSlice = createSlice({
  name: 'receipts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReceipts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchReceipts.fulfilled, (state, action) => {
        state.loading = false;
        state.receipts = action.payload;
        console.log('Fetched receipts:', action.payload); 
      })
      .addCase(fetchReceipts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to fetch receipts';
      });
  },
});

export default receiptsSlice.reducer;
