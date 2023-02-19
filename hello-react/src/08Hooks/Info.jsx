import React, { useEffect, useState, useReducer } from "react";

function reducer(state, action) {
  return {
    ...state,
    [action.name]: action.value,
  };
}

const Info = () => {
  const [state, dispatch] = useReducer(reducer, { name: "", nickname: "" });
  const { name, nickname } = state;

  const onChange = (e) => {
    dispatch(e.target); //action = e.target
  };
  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNickname = (e) => {
  //   setNickname(e.target.value);
  // };

  useEffect(() => {
    console.log("useEffect");
    return () => {
      console.log("cleanup");
    };
  }, [name]);

  return (
    <>
      <input name="name" value={name} onChange={onChange}></input>
      <input name="nickname" value={nickname} onChange={onChange}></input>
      <div>
        <b>name:</b> {name}
      </div>
      <div>
        <b>nickname : </b> {nickname}
      </div>
    </>
  );
};

export default Info;
