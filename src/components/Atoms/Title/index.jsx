import React from "react";
import styled from "styled-components";
import COLOR from "../../../variables/color";
import TEXTS from "../../../variables/texts";
import FONTFAMILY from "../../../variables/font_family";
import BREAKPOINT from "../../../variables/breakpoint";a

const Title=()=>{
    return <StyledText>SIMPLE TODO APP</StyledText>;
}
export default Title;

const StyledText = styled.div`
  color: ${COLOR.WHITE};
  ${TEXTS.M};
  margin-bottom:20px;
  font-family:${FONTFAMILY.ROBOTO};
@media screen and (min-width:${BREAKPOINT.MEDIUM}){
  ${TEXTS.L}
}
`;
