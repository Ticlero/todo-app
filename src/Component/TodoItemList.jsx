import React from "react";
import styled, { css } from "styled-components";
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from "react-icons/md";
const ListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  box-sizing: border-box;
  ${(props) => {
    if (props.checked === true) {
      return css`
        opacity: 0.5;
        background-color: #ecf0f1;
      `;
    }
  }}
`;

const CompleteBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 10%;
  ${(props) => {
    if (props.checked === true) {
      return css`
        color: #3498db;
      `;
    }
    return css`
      color: black;
    `;
  }}
`;
const ContentBox = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  ${(props) => {
    if (props.checked === true) {
      return css`
        text-decoration: line-through;
        text-decoration-color: #e74c3c;
      `;
    }
  }}
`;
const DeleteBox = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 10%;
  color: #e74c3c;
  transition: transform 0.2s ease-in;
  :hover {
    transform: rotate(-90deg);
  }
`;

function TodoItemList({ item, onClickTodoDel, onClickTodoComplete }) {
  return (
    <ListContainer checked={item.checked}>
      <CompleteBox
        onClick={(e) => {
          onClickTodoComplete(item.id);
        }}
        checked={item.checked}
      >
        {item.checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
      </CompleteBox>
      <ContentBox checked={item.checked}>{item.text}</ContentBox>
      <DeleteBox
        onClick={(e) => {
          onClickTodoDel(item.id);
        }}
      >
        <MdRemoveCircleOutline />
      </DeleteBox>
    </ListContainer>
  );
}

export default TodoItemList;
