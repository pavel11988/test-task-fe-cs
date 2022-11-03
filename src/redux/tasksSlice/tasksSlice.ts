import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITask } from "../../models/ITask";
import tasksOperations from "./tasksOperations";

interface TasksSlice {
  tasks: ITask[] | [];
  isLoadingTasks: boolean;
  error: string | null;
}

const initialState: TasksSlice = {
  tasks: [],
  isLoadingTasks: false,
  error: null,
};

const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {},
  extraReducers: {
    [tasksOperations.getTasks.pending.type]: (state, action: PayloadAction) => {
      state.isLoadingTasks = true;
      state.error = null;
    },
    [tasksOperations.getTasks.fulfilled.type]: (
      state,
      action: PayloadAction<ITask[]>
    ) => {
      state.isLoadingTasks = false;
      state.error = null;
      state.tasks = action.payload;
    },
    [tasksOperations.getTasks.rejected.type]: (
      state,
      action: PayloadAction
    ) => {
      state.isLoadingTasks = false;
      state.error = "Error download tasks...";
    },
  },
});

export default tasksSlice.reducer;
