import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";

import { Visibility, VisibilityOff } from "@mui/icons-material";

import authOperations from "../../redux/authSlice/authOperations";
import { useAppDispatch } from "../../hooks/redux";

//styled
import {
  CheckboxContainer,
  CheckboxField,
  EmailField,
  FieldContainer,
  FormContainer,
  LabelField,
  LoginButton,
  PasswordField,
} from "./AuthForm.styled";

const AuthForm = () => {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [showPassword, setShowPasswod] = useState(false);

  const resetForm = () => {
    setEmail("");
    setPassword("");
    setRemember(false);
  };

  const handleSubmit = async () => {
    const loginConfig = {
      email,
      password,
      remember,
    };

    dispatch(authOperations.login(loginConfig));
    resetForm();
  };

  const handleClickShowPassword = () => {
    setShowPasswod(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <FormContainer>
      <FieldContainer>
        <LabelField htmlFor="outlined-adornment-login">Email</LabelField>
        <EmailField
          id="outlined-adornment-login"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          style={{ color: "white" }}
          label="Email"
        />
      </FieldContainer>

      <FieldContainer>
        <LabelField htmlFor="outlined-adornment-password">Password</LabelField>
        <PasswordField
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FieldContainer>

      <FieldContainer>
        <CheckboxContainer
          label="Remember me"
          control={
            <CheckboxField
              checked={remember}
              sx={{
                color: "transparent",
              }}
            />
          }
          onClick={() => setRemember(!remember)}
        />
      </FieldContainer>

      <LoginButton onClick={handleSubmit}>Login</LoginButton>
    </FormContainer>
  );
};

export default AuthForm;
