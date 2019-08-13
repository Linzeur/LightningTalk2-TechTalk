/**@jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { LoremIpsum } from "lorem-ipsum";

import useToDos from "./useToDos";

function App() {
  const lorem = new LoremIpsum({
    wordsPerSentence: {
      max: 6,
      min: 3
    }
  });

  const listToDos = useToDos([
    "Talk in Tech Talk",
    "Show demos",
    "Go on project",
    "See the next talk",
    "Go to drink with codeable people"
  ]);
  return (
    <>
      <h1>List of To Dos </h1>

      <button onClick={() => listToDos.add(lorem.generateSentences(1))}>
        Add new ToDo
      </button>

      <ul>
        {listToDos.value.map((todo, i) => (
          <li key={i}>
            <div
              css={{
                width: "50%",
                display: "flex",
                padding: "10px 10px"
              }}
            >
              <span css={{ width: 250 }}>{todo}</span>
              <button onClick={() => listToDos.removeIndex(i)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
      <button onClick={listToDos.clear}>Clear List</button>
    </>
  );
}

export default App;
