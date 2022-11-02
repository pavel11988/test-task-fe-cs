import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;

  width: 300px;

  margin: auto;
`;
export const Title = styled(Typography)`
  font-family: "Lexend Deca", sans-serif;
  font-size: 64px;
  text-align: center;
  color: var(--white);

  margin-bottom: 35px;
`;
