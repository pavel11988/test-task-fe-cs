import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

interface IProps {
  children: JSX.Element;
}

const PrivateRoute = ({ children }: IProps) => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
