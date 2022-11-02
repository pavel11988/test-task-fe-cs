import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

// import AuthPage from "../../pages/AuthPage/AuthPage";
// import MainPage from "../../pages/MainPage/MainPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));

function App() {
  return (
    <Routes>
      <Route
        index
        path="/login"
        element={
          <PublicRoute>
            <AuthPage />
          </PublicRoute>
        }
      />

      <Route
        path="/main"
        element={
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
