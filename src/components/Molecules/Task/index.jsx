import React, { useState } from "react";
import styled from "styled-components";
import Checkbox from "../../Atoms/Checkbox";
import Input from "../../Atoms/Input";
import EditButton from "../../Atoms/Editbutton";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Task = ({
  onTaskNameChange,
  onTaskComplete,
  taskName = "",
  defaultIsEditing = false,
}) => {
  const [isEditing, setIsEditing] = useState(defaultIsEditing);
  const onEditComplete = (value) => {
    setIsEditing(false);
    onTaskNameChange(value);
  };
  const onEditButtonClick = () => {
    setIsEditing(true);
  };

  return (
    <StyledWrapper>
      <StyledCheckboxWrapper>
        <Checkbox onClick={onTaskComplete} />
      </StyledCheckboxWrapper>
      {isEditing ? (
        <Input onEditComplete={onEditComplete} defaultValue={taskName} />
      ) : (
        <StyledNameAndButtonWrapper>
          <StyledTaskName>{taskName}</StyledTaskName>
          <StyledEditButtonWrapper>
            <EditButton onClick={onEditButtonClick} />
          </StyledEditButtonWrapper>
        </StyledNameAndButtonWrapper>
      )}
    </StyledWrapper>
  );
};
export default Task;
const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 4.5px;
  margin-top: 10px;
  aline-item: center;
`;
const StyledCheckboxWrapper = styled.div`
  display: flex;
  margin-right: 10px;
`;
const StyledNameAndButtonWrapper = styled.div`
  display: flex;
  width: 100%;
`;
const StyledTaskName = styled.div`
  display: flex;
  width: 100%;
  ${TEXT.S}
  color:${COLOR.LIGHT_GRAY};
`;
const StyledEditButtonWrapper = styled.div``;
