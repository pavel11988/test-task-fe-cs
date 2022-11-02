import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const BASE_URL = "http://localhost:3000";

interface ILoginCredentials {
  email: string;
  password: string;
  remember: boolean;
}

const login = createAsyncThunk(
  "auth/login",
  async (credentials: ILoginCredentials) => {
    const body = new URLSearchParams({
      email: credentials.email,
      password: credentials.password,
    });
    try {
      const response = axios({
        method: "post",
        url: `${BASE_URL}/login`,
        data: body,
      });
      return response.then((res) => res.data);
    } catch (error) {
      return error;
    }
  }
);

const authOperations = {
  login,
};

export default authOperations;
