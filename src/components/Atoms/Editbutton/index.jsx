import React from "react";
import styled from "styled-components";
import pencil from "../../../assets/svg/pencil.svg";
import COLOR from "../../../variables/color.js";
const EditButton = ({ onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <HoverCircle />
      <Img src={pencil} />
    </StyledButton>
  );
};
export default EditButton;

const HoverCircle = styled.div`
  position: absolute;
  transition: 0.2s;
  background-color: ${COLOR.LIGHT_GRAY};
  border-radius: 50%;
  width: 100%;
  height: 100%;
  margin: auto 0;
`;

const StyledButton = styled.button`
  padding: 0;
  width: 20px;
  height: 20px;
  background: none;
  border: none;
  position: relative;
  cursor: pointer;
  & > ${HoverCircle} {
    opacity: 0;
  }

  &:hover {
    & > ${HoverCircle} {
      opacity: 0.2;
    }
  }
`;
const Img = styled.img`
  width: 100%;
  height: 100%;
`;
