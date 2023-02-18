import React, { Component } from "react";

import ScrollBox from "./05Ref/ScrollBox";

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
  render() {
    return (
      <>
        <ScrollBox
          ref={(ref) => {
            this.ScrollBox = ref;
          }}
        />
        <button onClick={() => this.ScrollBox.scrollToBottom()}>
          to bottom
        </button>
        <button onClick={() => this.ScrollBox.scrollToTop()}>to top</button>
      </>
    );
  }
}

export default App;
