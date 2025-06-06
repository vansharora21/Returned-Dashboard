import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { ForgotPasswordState, ForgotPasswordResponse, ForgotPasswordRequest } from '../types';
import API from '../../api/apiClass';
import { FORGOT_PASSWORD } from '../../Constants';

// Initial state for the forgot password slice
const initialState: ForgotPasswordState = {
  loading: false,
  success: false,
  error: null,
};

// Async thunk to handle forgot password API call
const authForgotPassword = createAsyncThunk<
  ForgotPasswordResponse,
  ForgotPasswordRequest,
  { rejectValue: string }
>('auth/forgotPassword', async (credentials, thunkAPI) => {
  try {
    const { data } = await API.call(FORGOT_PASSWORD, {
      method: 'post',
      data: credentials,
    });
    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || 'Forgot password failed'
    );
  }
});

// Forgot password slice
const forgotPasswordSlice = createSlice({
  name: 'forgotPassword',
  initialState,
  reducers: {
    // Optional: reset state if needed
    resetForgotPasswordState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(authForgotPassword.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(authForgotPassword.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        state.error = null;
      })
      .addCase(authForgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload || 'Forgot password failed';
      });
  },
});

// Export reducer and optional action
export const { resetForgotPasswordState } = forgotPasswordSlice.actions;
export default forgotPasswordSlice.reducer;
export { authForgotPassword };
