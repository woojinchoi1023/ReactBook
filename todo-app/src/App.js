import React, { useCallback, useReducer, useRef, useState } from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTools() {
  const array = [];
  for (let i = 0; i < 2500; i++) {
    array.push({
      id: i + 1,
      text: `todo ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTools);
  //2번째 -> 초기상태, 3번째 -> 초기상태 만드는 함수. lazy init?

  // const [todos, setTodos] = useState(createBulkTools);

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "react 기초 알아보기",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "component styling",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: "make todo app",
  //     checked: false,
  //   },
  // ]);
  const nextId = useRef(4);
  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      // setTodos(todos.concat(todo));
      dispatch({ type: "INSERT", todo });
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback((id) => {
    // setTodos((todos) => todos.filter((todo) => todo.id !== id));

    // setTodos(todos.filter((todo) => todo.id !== id));
    dispatch({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispatch({ type: "TOGGLE", id });

    // setTodos((todos) =>
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );

    // setTodos(
    //   todos.map((todo) =>
    //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
    //   )
    // );
  }, []);
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
