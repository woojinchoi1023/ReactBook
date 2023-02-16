import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => {
    setMessage("hello~");
    setColor("red");
  };
  const onClickLeave = () => {
    setMessage("goodBye");
    setColor("blue");
  };

  const [color, setColor] = useState("black");

  return (
    <div>
      <h1 style={{ color: color }}>{message}</h1>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>leave</button>
    </div>
  );
};

export default Say;
