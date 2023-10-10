import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = ({ isActive, errorText }) => {
  return (
    <StyledContent isActive={isActive}>
      <StyledText>{errorText}</StyledText>
    </StyledContent>
  );
};
export default Alert;
const StyledContent = styled.div`
  position: absolute;
  top: 80px;
  padding: 10px 20px;
  background: ${COLOR.RED};
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  opacity: 0;
  ${(props) =>
    props.isActive &&
    `
   opacity: 1;
`}
`;
const StyledText = styled.div`
  ${TEXT.S}
  color: ${COLOR.WHITE};
`;
