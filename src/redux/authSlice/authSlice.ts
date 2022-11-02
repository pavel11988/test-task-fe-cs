import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginRes } from "../../models/ILoginRes";
import authOperations from "./authOperations";

interface AuthState {
  user: {
    email: string | null;
    id: number | null;
  };
  token: string | null;
  isLoggedIn: boolean;
  isLoadingUser: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    email: null,
    id: null,
  },
  token: null,
  isLoggedIn: false,
  isLoadingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: {
    [authOperations.login.pending.type]: (
      state,
      action: PayloadAction<ILoginRes>
    ) => {
      state.isLoadingUser = true;
      state.error = null;
    },
    [authOperations.login.fulfilled.type]: (
      state,
      action: PayloadAction<ILoginRes>
    ) => {
      console.log(action.payload);
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoadingUser = false;
      state.error = null;
    },
    [authOperations.login.rejected.type]: (
      state,
      action: PayloadAction<ILoginRes>
    ) => {
      console.log(action);
    },
  },
});

export default authSlice.reducer;
