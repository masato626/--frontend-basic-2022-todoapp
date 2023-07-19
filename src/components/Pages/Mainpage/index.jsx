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
`;
const StyledTodoCardWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
