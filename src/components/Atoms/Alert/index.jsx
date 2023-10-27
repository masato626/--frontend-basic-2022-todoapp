import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXT from "../../../variables/texts";

const Alert = ({ visible, errorText }) => {
  return (
    <StyledContent visible={visible}>
      <StyledText>{errorText}</StyledText>
    </StyledContent>
  );
};
export default Alert;
const StyledContent = styled.div`
  position: absolute;
  left: 50%;
  top: 80px;
  padding: 10px 20px;
  background: ${COLOR.RED};
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  opacity: 0;
  transition: 0.5s;
  transform: translateX(-50%) translateY(-40px);
  ${(props) =>
    props.visible &&
    `
    transform: translateX(-50%) translateY(0);
   opacity: 1;
   
`}
`;
const StyledText = styled.div`
  ${TEXT.S}
  color: ${COLOR.WHITE};
`;
