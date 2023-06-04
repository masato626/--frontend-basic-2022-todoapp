import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Input = ({ onEditComplete, defaultValue = "" }) => {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.value = defaultValue;
    ref.current.focus();
    ref.current.onblur = () => onEditComplete(ref.current.value);
    ref.current.addEventListener("keypress", (event) => {
      if (event.key === "Enter") onEditComplete(ref.current.value);
    });
  }, []);

  return <StyledInput ref={ref} />;
};
export default Input;

const StyledInput = styled.input`
  width: 100%;
  ${TEXT.S};
  padding: 0px 4px;
  background-color: ${COLOR.BLACK};
  color: ${COLOR.LIGHT_GRAY};
  outline: none;
  border: none;
  border-radius: 2px;
`;
