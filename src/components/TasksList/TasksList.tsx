import React from "react";
import { useAppSelector } from "../../hooks/redux";
import { List, ListItem } from "./TasksList.styled";

const TasksList = () => {
  const tasks = useAppSelector((state) => state.tasksReducer.tasks);
  return (
    <List>
      {tasks.map(({ id, text }) => (
        <ListItem key={id}>
          <p>{text}</p>
        </ListItem>
      ))}
    </List>
  );
};

export default TasksList;
