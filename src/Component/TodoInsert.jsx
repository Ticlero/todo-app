import React, { useCallback, useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from "react-icons/md";

const InsertHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ListInput = styled.input`
  all: unset;
  border: 0;
  padding: 1rem;
  font-size: 1.15rem;
  width: 90%;
  background: #2c3e50;
  color: #ecf0f1;

  :focus {
    outline: none;
  }
  ::placeholder {
    color: #bdc3c7;
  }
`;

const ListAddButton = styled.button`
  all: unset;
  cursor: pointer;
  text-align: center;
  padding: 1rem;
  box-sizing: border-box;
  font-size: 1.15rem;
  background: #34495e;
  width: 10%;
  height: 100%;
  transition: all 0.1s ease-in;
  :hover {
    background: white;
  }
  :active {
    transform: scale(0.5);
  }
`;

function TodoInsert({ onClickTodoAdd }) {
  const [todoText, setTodoText] = useState("");
  const onChangeText = useCallback((e) => {
    setTodoText(e.target.value);
  }, []);
  const onClick = (e) => {
    if (todoText !== "") {
      onClickTodoAdd(todoText);
      setTodoText("");
    }
  };
  return (
    <InsertHolder>
      <ListInput
        placeholder="할 일을 입력 하세요"
        onChange={onChangeText}
        value={todoText}
      ></ListInput>
      <ListAddButton onClick={onClick}>
        <MdAdd />
      </ListAddButton>
    </InsertHolder>
  );
}

export default TodoInsert;
