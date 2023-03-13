import React, { memo, useCallback } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import useActions from "../lib/useActions";
import { changeInput, insert, toggle, remove } from "../modules/todos";

const TodosContainer = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback(
  //   (input) => dispatch(changeInput(input)),
  //   [dispatch]
  // );
  // const onInsert = useCallback((text) => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default memo(TodosContainer);
//지금과 같은 경우에는 todosContainer는 부모 컴포넌트인 app 컴포넌트가 리렌더링되는 일이 없으므로 불필요

// export default connect(
//   //비구조화 할당을 통해 todos를 분리하여
//   //state.todos.input 대신 todos.input을 사용
//   ({ todos }) => ({
//     input: todos.input,
//     todos: todos.todos,
//   }),
//   {
//     changeInput,
//     insert,
//     toggle,
//     remove,
//   }
// )(TodosContainer);
