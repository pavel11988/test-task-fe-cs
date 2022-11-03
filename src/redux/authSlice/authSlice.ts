import { IToken } from "./../../models/IToken";
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
    // set token
    [authOperations.setToken.pending.type]: (state, action: PayloadAction) => {
      state.isLoadingUser = true;
      state.error = null;
    },
    [authOperations.setToken.fulfilled.type]: (
      state,
      action: PayloadAction<IToken>
    ) => {
      state.isLoadingUser = false;
      state.error = null;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [authOperations.setToken.rejected.type]: (state, action: PayloadAction) => {
      state.isLoadingUser = false;
      state.error = null;
      state.token = null;
      state.isLoggedIn = false;
    },

    // login
    [authOperations.login.pending.type]: (state, action: PayloadAction) => {
      state.isLoadingUser = true;
      state.error = null;
    },
    [authOperations.login.fulfilled.type]: (
      state,
      action: PayloadAction<ILoginRes>
    ) => {
      state.user = action.payload.user;
      state.token = action.payload.accessToken;
      state.isLoggedIn = true;
      state.isLoadingUser = false;
      state.error = null;
    },
    [authOperations.login.rejected.type]: (
      state,
      action: PayloadAction<string>
    ) => {
      state.isLoadingUser = false;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export default authSlice.reducer;
