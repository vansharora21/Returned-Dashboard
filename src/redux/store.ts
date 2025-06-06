import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import authForgotPassword from './slices/forgotPasswordSlice';
import recieptReducer from './slices/recieptSlice';
import propertiesSlice from './slices/propertiesSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    forgotPassword: authForgotPassword,
    reciept: recieptReducer,
    properties: propertiesSlice,
  },
});

// Types for state and dispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;