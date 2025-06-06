import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthState, LoginRequest, LoginResponse } from "../types";
import API from "../../api/apiClass";
import { LOGIN_ENDPOINT } from "../../Constants";

const initialToken = localStorage.getItem("token");

const initialState: AuthState = {
  token: initialToken,
  loading: false,
  error: null,
  user: {
    companies: [],
    email: "",
    is_application_admin: false,
    name: "",
    user_id: undefined,
  },
};

export const loginUser = createAsyncThunk<
  LoginResponse,
  LoginRequest,
  { rejectValue: string }
>("auth/loginUser", async (credentials, thunkAPI) => {
  try {
    const { data } = await API.call(LOGIN_ENDPOINT, {
      method: "post",
      data: credentials,
    });
    return data;
  } catch (err: any) {
    return thunkAPI.rejectWithValue(
      err.response?.data?.message || "Login failed"
    );
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        console.log("loginUser----------", action.payload);
        state.loading = false;
        const user ={
          companies: action.payload.companies,
          email: action.payload.email,
          is_application_admin: action.payload.is_application_admin,
          name: action.payload.name,
          user_id: action.payload.user_id,
        };
        state.user = user
        console.log("user is here ---------------", user)
        state.token = action.payload.token;
        // localStorage.setItem("user", user);
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Login failed";
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
