import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";

const rootReducer = combineReducers({
  authReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          // Ignore these action types
          ignoredActions: ["your/action/type"],
          // Ignore these field paths in all actions
          ignoredActionPaths: ["meta.arg", "payload.timestamp"],
          // Ignore these paths in the state
          ignoredPaths: ["items.dates"],
        },
      }),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
