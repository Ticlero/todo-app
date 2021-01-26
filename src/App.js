import React, { useCallback, useReducer, useRef } from "react";
import TodoInsert from "./Component/TodoInsert";
import TodoItemList from "./Component/TodoItemList";
import TodoTemplate from "./Component/TodoTemplate";

const reducer = (state, action) => {
  if (action.type === "ADD") {
    return state.concat({
      id: action.id,
      text: action.text,
      checked: action.checked,
    });
  } else if (action.type === "UPDATE") {
    return state.map((item) => {
      return item.id === action.id ? { ...item, checked: !item.checked } : item;
    });
  } else if (action.type === "DEL") {
    return state.filter((item) => {
      return item.id !== action.id;
    });
  }
};

const initialTodoList = (initVal) => {
  if (initVal === "") {
    return [];
  }
  return initVal;
};

const loadLocalStorage = () => {
  const list = localStorage.getItem("todolist");
  return JSON.parse(list) || "";
};

const setLocalStorage = (state) => {
  localStorage.setItem("todolist", JSON.stringify(state));
};

const ItemContainer = {
  background: "white",
  height: "500px",
  overflowY: "auto",
};

function App() {
  const initVal = loadLocalStorage();
  //const initVal = "";
  let nextNum = 0;
  if (initVal !== "") {
    const idList = initVal.map((item) => item.id);
    nextNum = Math.max(...idList);
  }
  const nextId = useRef(nextNum + 1);

  const [state, dispatch] = useReducer(reducer, initVal, initialTodoList);

  setLocalStorage(state);

  const onClickTodoAdd = useCallback((text) => {
    const data = {
      type: "ADD",
      id: nextId.current,
      text,
      checked: false,
    };
    nextId.current += 1;
    dispatch(data);
  }, []);

  const onClickTodoDel = useCallback((id) => {
    const data = {
      id,
      type: "DEL",
    };
    dispatch(data);
  }, []);

  const onClickTodoComplete = useCallback((id) => {
    const data = {
      id,
      type: "UPDATE",
    };
    dispatch(data);
  }, []);

  const drawItemList = () => {
    return state.map((item) => {
      return (
        <TodoItemList
          item={item}
          key={item.id}
          onClickTodoDel={onClickTodoDel}
          onClickTodoComplete={onClickTodoComplete}
        />
      );
    });
  };
  return (
    <TodoTemplate>
      <TodoInsert onClickTodoAdd={onClickTodoAdd}></TodoInsert>
      <div style={ItemContainer}>
        {state.length !== 0 ? drawItemList() : ""}
      </div>
    </TodoTemplate>
  );
}

export default App;
