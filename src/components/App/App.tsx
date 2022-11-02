import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const HomePage = lazy(() => import("../../pages/HomePage/HomePage"));
const AuthPage = lazy(() => import("../../pages/AuthPage/AuthPage"));

function App() {
  return (
    <Routes>
      <Route index path="/login" element={<AuthPage />} />
      <Route path="/home" element={<HomePage />} />
    </Routes>
  );
}

export default App;
