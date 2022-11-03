import { toast } from "react-toastify";
import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { IToken } from "../../models/IToken";

const BASE_URL = "http://localhost:3000";

const getTasks = createAsyncThunk(
  "tasks/getTasks",
  async (credentials: IToken, thunkAPI) => {
    try {
      const response = await axios({
        method: "get",
        url: `${BASE_URL}/tasks`,
        headers: {
          Authorization: `Bearer ${credentials.token}`,
        },
      });
      return response.data;
    } catch (e: any) {
      toast.error(e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  }
);

const tasksOperations = {
  getTasks,
};

export default tasksOperations;
