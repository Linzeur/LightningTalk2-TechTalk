/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import useInput from "./useInput";

function App() {
  const propsInput = useInput("Demo Tech Talk");

  const propsInput2 = useInput("Lightning talk");

  return (
    <div>
      <header
        css={{
          backgroundColor: "lightgray",
          height: 50,
          fontWeight: "bold",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center"
        }}
      >
        <span>{propsInput.value}</span>
      </header>
      <main css={{ marginTop: 50, display: "flex", flexDirection: "column" }}>
        <input type="text" css={{ width: 250, margin: 10 }} {...propsInput} />
        <input type="text" css={{ width: 250, margin: 10 }} {...propsInput2} />
      </main>
    </div>
  );
}

export default App;
