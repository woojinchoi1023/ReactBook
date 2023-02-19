import React, { useState } from "react";
import Info from "./08Hooks/Info";
import Counters from "./08Hooks/Counters";

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
      </div>
    </>
  );
};

export default App;
