import React, { useContext } from "react";
import ColorContext from "../contexts/color";
// import { ColorConsumer } from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);

  //function as a child, render props. 컴포넌트 children 자리에 일반 jsx 혹은 문자열이 아닌 함수 전달
  return (
    <>
      <div style={{ width: "64px", height: "64px", background: state.color }} />
      <div
        style={{ width: "32px", height: "32px", background: state.subcolor }}
      />
    </>
    // <ColorConsumer>
    //   {({ state }) => (
    //     <>
    //       <div
    //         style={{
    //           width: "64px",
    //           height: "64px",
    //           background: state.color,
    //         }}
    //       />
    //       <div
    //         style={{
    //           width: "32px",
    //           height: "32px",
    //           background: state.subcolor,
    //         }}
    //       />
    //     </>
    //   )}
    // </ColorConsumer>
  );
};

export default ColorBox;
