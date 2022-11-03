import { toast } from "react-toastify";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IToken } from "../../models/IToken";

const BASE_URL = "http://localhost:3000";

interface ILoginCredentials {
  email: string;
  password: string;
  remember: boolean;
}

const setToken = createAsyncThunk(
  "auth/setToken",
  async (credentials: IToken) => {
    try {
      return credentials;
    } catch (error) {
      return error;
    }
  }
);

const login = createAsyncThunk(
  "auth/login",
  async (credentials: ILoginCredentials, thunkAPI) => {
    const body = new URLSearchParams({
      email: credentials.email,
      password: credentials.password,
    });
    try {
      const response = await axios({
        method: "post",
        url: `${BASE_URL}/login`,
        data: body,
      });
      if (credentials.remember) {
        localStorage.setItem("token", response.data.accessToken);
      }
      toast.success("Welcome!");
      return response.data;
    } catch (e: any) {
      toast.error(e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const authOperations = {
  login,
  setToken,
};

export default authOperations;
