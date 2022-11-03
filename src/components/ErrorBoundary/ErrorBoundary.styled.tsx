import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img`
  margin: 20px;
  width: 350px;
  border-radius: 10px;
`;
export const Title = styled.p`
  font-family: "Lexend Deca", sans-serif;
  font-size: 20px;
  color: var(--error-title);
`;
export const Text = styled.p`
  font-family: "Rubik", sans-serif;
  font-size: 17px;
  color: var(--error-text);
`;
