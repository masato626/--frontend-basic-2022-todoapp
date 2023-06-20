import React, { useState } from "react";
import styled from "styled-components";
import AddTaskButton from "../../Atoms/AddTaskbutton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [tasklist, setTasklist] = useState([]);
  const onAddTaskButtonClick = () => {
    const NewTask = {
      name: "",
      initializing: true,
    };
    setTasklist(tasklist.concat(NewTask));
  };
  const onTaskComplete = (index) => {
    let NewTasklist = tasklist.filter((_, i) => i !== index);
    setTasklist(NewTasklist);
  };
  const onTaskNameChange = (value, index) => {
    let NewTasklist = [...tasklist];
    if (value === "") {
      NewTasklist.splice(index, 1);
    } else {
      NewTasklist.splice(index, 1, {
        name: value,
        initializing: false,
      });
    }
    setTasklist(NewTasklist);
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
          ></Task>
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
