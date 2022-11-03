import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import tasksReducer from "./tasksSlice/tasksSlice";

const rootReducer = combineReducers({
  authReducer,
  tasksReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: ["your/action/type"],
          ignoredActionPaths: ["meta.arg", "payload.timestamp"],
          ignoredPaths: ["items.dates"],
        },
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
