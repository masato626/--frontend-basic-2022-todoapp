import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useAlertHandlerContext } from "../../../contexts/alert_handler";
import COLOR from "../../../variables/color";
import AddTaskButton from "../../Atoms/AddTaskButton";
import Task from "../../Molecules/Task";

const TodoCard = () => {
  const [tasklist, setTasklist] = useState([]);
  const AlertHandlerContext = useAlertHandlerContext();
  const onAddTaskButtonClick = () => {
    const newTask = {
      name: "",
      initializing: true,
    };
    setTasklist(tasklist.concat(newTask));
  };
  const onTaskComplete = (index) => {
    const newTasklist = tasklist.filter((_, i) => i !== index);
    setTasklist(newTasklist);
  };
  const onTaskNameChange = (value, index) => {
    const newTasklist = [...tasklist];
    if (value === "") {
      newTasklist.splice(index, 1);
      AlertHandlerContext.setAlert("please write your task");
    } else {
      newTasklist.splice(index, 1, {
        name: value,
        initializing: false,
      });
    }
    setTasklist(newTasklist);
  };
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("tasklist"));

    if (data === null) return;
    setTasklist(data);
  }, []);
  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
  }, [tasklist]);

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
  border-radius: 4px;
  padding: 20px;
  background-color: ${COLOR.LIGHT_BLACK};
  width: 100%;
  margin: 0 auto;
`;
const StyledTaskList = styled.div``;
