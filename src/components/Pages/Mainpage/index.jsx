import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import Todocard from "../../Organisms/Todocard";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <StyledTodoCardWrapper>
        <Todocard />
      </StyledTodoCardWrapper>
    </StyledWrapper>
  );
};
export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    padding-top: 20px;
  }
`;
const StyledTodoCardWrapper = styled.div`
  width: 500px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;
  @media screen and (max-width: ${BREAKPOINT.MEDIUM}) {
    width: 100%;
  }
`;
