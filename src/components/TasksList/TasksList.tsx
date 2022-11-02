import React from "react";
import { List, ListItem } from "./TasksList.styled";

const tasks = [
  {
    id: 1,
    text: "Learn how to make a perfect scrambled egg.",
  },
  {
    id: 2,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus hic illum.",
  },
  {
    id: 3,
    text: "Learn how to make a perfect scrambled egg.",
  },
  {
    id: 4,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis accusamus hic illum.",
  },
  {
    id: 5,
    text: "Learn how to make a perfect scrambled egg.",
  },
];

const TasksList = () => {
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
