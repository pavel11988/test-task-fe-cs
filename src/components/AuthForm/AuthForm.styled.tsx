import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

export const FormContainer = styled.div`
  text-align: left;
  width: 300px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
`;

export const FieldContainer = styled(FormControl)`
  width: 300px;
  margin-bottom: 32px; ;
`;
export const LabelField = styled(InputLabel)`
  color: whitesmoke;
  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
`;
export const EmailField = styled(OutlinedInput)`
  color: var(--white);
  width: 300px;
  height: 44px;
  background-color: var(--controls-background);
  color: white;
  border-radius: 10px;

  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
`;
export const PasswordField = styled(OutlinedInput)`
  color: var(--white);
  width: 300px;
  height: 44px;
  background-color: var(--controls-background);
  border-radius: 10px;

  font-family: "Lexend Deca", sans-serif;
  font-size: 14px;
`;

export const CheckboxField = styled(Checkbox)`
  background-color: var(--controls-background);
  outline-color: transparent;
  width: 18px;
  height: 17px;
  border-radius: 3px;

  margin-right: 7px;
`;

export const CheckboxContainer = styled(FormControlLabel)`
  color: var(--white);
  margin: 0;
  max-width: 300px;
  font-family: "Montserrat", sans-serif;
`;
export const LoginButton = styled(Button)`
  width: 300px;
  height: 45px;

  background: var(--primary);
  color: var(--white);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  margin-top: -8px;

  text-transform: capitalize;

  &:hover,
  &:focus {
    background-color: var(--hover);
  }
`;
