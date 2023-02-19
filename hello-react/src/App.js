import React, { useState } from "react";
import Info from "./08Hooks/Info";
import Counters from "./08Hooks/Counters";
import Average from "./08Hooks/Average";

const App = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div>
        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          {visible ? "hide" : "show"}
        </button>
        <hr />
        {visible && <Info />}
      </div>
      <div>
        <Counters />
        <Average />
      </div>
    </>
  );
};

export default App;
