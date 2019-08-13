/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

import ListEvents from "./events-list";
import useVisibility from "./useVisibility";

function App() {
  const listEventsHooks = useVisibility();
  return (
    <>
      <h1>List of execution of Page visibility API </h1>

      <ListEvents listEvents={listEventsHooks} />
    </>
  );
}

export default App;
