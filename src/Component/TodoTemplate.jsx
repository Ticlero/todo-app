import React from "react";
import styled, { css } from "styled-components";

const ContainerDiv = styled.div`
  width: 768px;
  margin: 3rem auto 0 auto;
  border-radius: 4px;
  overflow: hidden;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;
const AppTitleDiv = styled.div`
  width: 100%;
  padding: 0.5em 0 0.5em 0;
  text-align: center;
  background: #3498db;
  color: #ecf0f1;
  font-weight: bold;
`;
const ChildrenDiv = styled.div`
  ${(props) =>
    props.children &&
    css`
      background: white;
    `};
`;

function TodoTemplate({ children }) {
  return (
    <ContainerDiv>
      <AppTitleDiv>일정 관리</AppTitleDiv>
      <ChildrenDiv>{children}</ChildrenDiv>
    </ContainerDiv>
  );
}

export default TodoTemplate;
