import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import { Container, Title } from "./AuthPage.styled";

const AuthPage = () => {
  return (
    <Container>
      <Title variant="h4">Welcome</Title>
      <AuthForm />
    </Container>
  );
};

export default AuthPage;
