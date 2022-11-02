import { createSlice } from "@reduxjs/toolkit";

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
  extraReducers: {},
});

export default authSlice.reducer;
