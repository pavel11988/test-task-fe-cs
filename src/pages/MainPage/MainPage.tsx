import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import { Container, TasksSection, TasksTitle } from "./MainPage.styled";

export const MainPage = () => {
  return (
    <Container>
      <TasksSection>
        <TasksTitle>Things to do</TasksTitle>
        <TasksList />
      </TasksSection>
    </Container>
  );
};

export default MainPage;
