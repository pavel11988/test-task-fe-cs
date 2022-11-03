import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useAppDispatch } from "../../hooks/redux";
import authOperations from "../../redux/authSlice/authOperations";
import Loader from "../Loader/Loader";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import PublicRoute from "../PublicRoute/PublicRoute";

const MainPage = lazy(() => import("../../pages/MainPage/MainPage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));

function App() {
  const dispatch = useAppDispatch();

  const localStorageToken = localStorage.getItem("token");

  useEffect(() => {
    if (localStorageToken) {
      dispatch(authOperations.setToken({ token: localStorageToken }));
    }
  }, [localStorageToken, dispatch]);

  return (
    <>
      <Suspense fallback={<Loader color={`var(--loader)`} />}>
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
            path="/"
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
        </Routes>
        <ToastContainer />
      </Suspense>
    </>
  );
}

export default App;
