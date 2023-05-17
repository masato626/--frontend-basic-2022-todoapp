import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <StyledShadow />
      <StyledWrapper>
        <img src={plus} />
        <StyledLabel>タスクを追加</StyledLabel>
      </StyledWrapper>
    </StyledButton>
  );
};
export default AddTaskButton;

const StyledShadow = styled.div`
  position: absolute;
  background-color: ${COLOR.GREEN};
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;
const StyledButton = styled.button`
  padding: 0;
  position: relative;
  background: none;
  cursor: pointer;
  border: none;
  & > ${StyledShadow} {
    opacity: 0;
  }
  &:hover {
    & > ${StyledShadow} {
      opacity: 0.2;
    }
  }
`;
const StyledWrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  & > img {
    width: 20px;
    height: 20px;
  }
`;
const StyledLabel = styled.div`
  color: ${COLOR.GREEN};
  margin-left: 10px;
  ${TEXT.S};
`;
