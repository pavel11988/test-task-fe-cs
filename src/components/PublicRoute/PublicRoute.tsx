import React from "react";
import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";

interface IProps {
  children: JSX.Element;
}

const PublicRoute = ({ children }: IProps) => {
  const { isLoggedIn } = useAppSelector((state) => state.authReducer);
  return <>{isLoggedIn ? <Navigate to="/" /> : children}</>;
};

export default PublicRoute;
