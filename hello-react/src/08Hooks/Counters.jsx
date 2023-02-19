import { type } from "@testing-library/user-event/dist/type";
import React, { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return { state };
  }
}

const Counters = () => {
  const [state, dispatch] = useReducer(reducer, { value: 0 });

  return (
    <>
      <p>
        current counter value: <b>{state.value}</b>
      </p>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          dispatch({ type: "DECREMENT" });
        }}
      >
        -1
      </button>
    </>
  );
};

export default Counters;
