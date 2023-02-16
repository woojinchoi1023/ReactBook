import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const onClickButton = () => {
    setCount((prevCount) => {
      return (prevCount += 1);
    });
  };
  return (
    <>
      <h1>{count}</h1>
      <button onClick={onClickButton}>+1</button>
    </>
  );
};

export default Counter;
