import React, { useState } from "react";

const IterationSample = () => {
  // const names = ["snowman", "snow", "ice", "wind"];
  const [names, setNames] = useState([
    { id: 1, text: "snowman" },
    { id: 2, text: "ice" },
    { id: 3, text: "snow" },
    { id: 4, text: "wind" },
  ]);
  const [inputText, setInputText] = useState("");
  const [nextId, setNextId] = useState(5);

  const onChange = (e) => {
    setInputText(e.target.value);
  };

  const onClickBtn = () => {
    const newNames = names.concat({ id: nextId, text: inputText });
    setNextId((prevId) => prevId + 1);
    setNames(newNames);
    setInputText("");
  };

  const onRemove = (id) => {
    const nextNames = names.filter((name) => name.id !== id);
    setNames(nextNames);
  };

  const namesList = names.map((name) => {
    return (
      <li
        key={name.id}
        onDoubleClick={() => {
          onRemove(name.id);
        }}
      >
        {name.text}
      </li>
    );
  });

  return (
    <>
      <ul>{namesList}</ul>
      <input value={inputText} onChange={onChange}></input>
      <button onClick={onClickBtn}>add</button>
    </>
  );
};

export default IterationSample;
