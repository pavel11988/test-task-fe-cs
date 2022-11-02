import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const loginUser = createAsyncThunk("auth/login", async (credentials) => {
  try {
    const data = await axios.post("/login", credentials);
    console.log(data);
    return data;
  } catch (error) {
    //обработка ошибки
    console.log(`Registration error, ${error}`);
    throw error;
  }
});

const authOperations = {
  loginUser,
};

export default authOperations;
