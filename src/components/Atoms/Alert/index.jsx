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
  top: 80px;
  padding: 10px 20px;
  background: ${COLOR.RED};
  width: 100%;
  max-width: 400px;
  border-radius: 4px;
  opacity: 0;
  margin: 0 auto;
  transition: 0.5s;
  ${(props) =>
    props.visible &&
    `
   opacity: 1;
   
`}
`;
const StyledText = styled.div`
  ${TEXT.S}
  color: ${COLOR.WHITE};
`;
