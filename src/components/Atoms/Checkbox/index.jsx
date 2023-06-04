import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import check from "../../../assets/svg/check.svg";

const Checkbox = ({ onClick }) => {
  return (
    <Styledbox onClick={onClick}>
      <img src={check} />
    </Styledbox>
  );
};
export default Checkbox;
const Styledbox = styled.button`
  background: none;
  justify-content: center;
  width: 20px;
  height: 20px;
  border: 2px solid ${COLOR.LIGHT_GRAY};
  border-radius: 2px;
  cursor: pointer;
  padding: 0;
  & > img {
    display: block;
    opacity: 0;
    width: 100%;
    height: 100%;
  }
  &:hover {
    & > img {
      opacity: 1;
    }
  }
`;
