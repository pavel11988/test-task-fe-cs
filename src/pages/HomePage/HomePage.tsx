import React from "react";
import TasksList from "../../components/TasksList/TasksList";
import { Container, TasksSection, TasksTitle } from "./HomePage.styled";

export const HomePage: React.FC = () => {
  return (
    <Container>
      <TasksSection>
        <TasksTitle>Things to do</TasksTitle>
        <TasksList />
      </TasksSection>
    </Container>
  );
};

export default HomePage;
