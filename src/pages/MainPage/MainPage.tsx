import React, { useEffect } from "react";
import ErrorBoundary from "../../components/ErrorBoundary/ErrorBoundary";
import TasksList from "../../components/TasksList/TasksList";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import tasksOperations from "../../redux/tasksSlice/tasksOperations";
import { Container, TasksSection, TasksTitle } from "./MainPage.styled";

export const MainPage = () => {
  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.authReducer.token);
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);

  useEffect(() => {
    if (token) {
      dispatch(tasksOperations.getTasks({ token }));
    }
  }, [token, dispatch]);

  return (
    <Container>
      <TasksSection>
        {tasks.length ? (
          <>
            <TasksTitle>Things to do</TasksTitle>
            <TasksList />
          </>
        ) : (
          <ErrorBoundary />
        )}
      </TasksSection>
    </Container>
  );
};

export default MainPage;
