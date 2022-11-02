import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  align-items: center;

  height: 100vh;
`;

export const TasksSection = styled.section`
  width: 500px;
  height: auto;
  padding: 24px;
  border-radius: 8px;

  margin: auto;

  background-color: var(--controls-background);

  font-family: "Rubik", sans-serif;
  color: var(--white);
`;
export const TasksTitle = styled.h4`
  font-weight: 500;
`;
