import React, { Component } from "react";
import MyComponent from "./MyComponent";
import Counter from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

// function App() {
//   const name = "react";
//   const style = {
//     backgroundColor: "pink",
//   };

//   return (
//     <>
//       <h1>hello React</h1>
//       <h2 style={style}>{name}</h2>
//       {name === "react" && <h1>react!!</h1>}
//       {undefined ?? <h1>react!!</h1>}
//     </>
//   );
// }

class App extends Component {
  state = {
    a: 123,
    b: 222,
  };
  render() {
    const name = "react";

    return (
      <>
        <EventPractice></EventPractice>
        <Counter></Counter>
        <Say></Say>
      </>
    );
  }
}

export default App;
