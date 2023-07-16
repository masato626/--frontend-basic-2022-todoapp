import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [tasklist, setTasklist] = useState([]);
  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTasklist(tasklist.concat(newTask));
  };
  const onTaskComplete = (index) => {
    let newTasklist = tasklist.filter((_, i) => i !== index);
    setTasklist(newTasklist);
  };
  const onTaskNameChange = (value, index) => {
    let newTasklist = [...tasklist];
    if (value === "") {
      newTasklist.splice(index, 1);
    } else {
      newTasklist.splice(index, 1, {
        name: value,
        initializing: false,
      });
    }
    setTasklist(newTasklist);
  };
  return (
    <StyledWrapper>
      <AddTaskButton onClick={onAddTaskButtonClick} />
      <StyledTaskList>
        {tasklist.map((task, index) => (
          <Task
            key={index}
            onTaskComplete={() => onTaskComplete(index)}
            onTaskNameChange={(value) => {
              onTaskNameChange(value, index);
            }}
            taskName={task.name}
            defaultIsEditing={task.initializing}
          />
        ))}
      </StyledTaskList>
    </StyledWrapper>
  );
};
export default TodoCard;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const StyledTaskList = styled.div`
  margin-top: 14px;
`;
