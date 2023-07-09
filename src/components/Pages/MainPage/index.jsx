import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title";
import TodoCard from "../../Organisms/TodoCard";
import BREAKPOINT from "../../../variables/breakpoint";

const MainPage = () => {
  return (
    <StyledWrapper>
      <Title />
      <TodoCard />
    </StyledWrapper>
  );
};
export default MainPage;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const TodoCard = styled.div``;
