import React, { useRef, useState } from "react";

const EventPractice = () => {
  const [message, setMessage] = useState("");
  const messageRef = useRef(null);

  const onChangeInput = (e) => {
    setMessage(e.target.value);
  };

  const onClickButton = () => {
    alert(message);
    messageRef.current.value = "";
    messageRef.current.focus();
  };

  const onPressKey = (e) => {
    if (e.key === "Enter") {
      onClickButton();
    }
  };

  return (
    <div>
      <h1>event Practice!</h1>
      <h2>{message}</h2>
      <input
        type="text"
        name="message"
        placeholder="type anything"
        onChange={onChangeInput}
        ref={messageRef}
        onKeyDown={onPressKey}
      ></input>
      <button onClick={onClickButton}>OK</button>
    </div>
  );
};

export default EventPractice;
