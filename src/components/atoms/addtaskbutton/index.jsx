import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color.js";
import TEXT from "../../../variables/texts.js";
import plus from "../../../assets/svg/plus.svg";

const AddTaskButton = ({ OnClick }) => {
  return (
    <Styledbutton OnClick={OnClick}>
      <Styledshadow />
      <Styledwrapper>
        <img src={plus} />
        <Styledlabel>タスクを追加</Styledlabel>
      </Styledwrapper>
    </Styledbutton>
  );
};
export default AddTaskButton;

const Styledshadow = styled.div`
  position: absolute;
  background-color: ${COLOR.GREEN};
  border-radius: 12px;
  width: 100%;
  height: 100%;
`;
const Styledbutton = styled.button`
  padding: 0;
  position: relative;
  background: none;
  cursor: pointer;
  border: none;
  & > ${Styledshadow} {
    opacity: 0;
  }
  &:hover {
    & > ${Styledshadow} {
      opacity: 0.2;
    }
  }
`;
const Styledwrapper = styled.div`
  display: flex;
  padding: 2px 6px;
  & > img {
    width: 20px;
    height: 20px;
  }
`;
const Styledlabel = styled.div`
  color: ${COLOR.GREEN};
  margin-left: 10px;
  ${TEXT.S};
`;
